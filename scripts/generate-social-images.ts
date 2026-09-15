import { mkdir, readFile, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { parse } from "yaml";
import {
  socialImagePath,
  socialTagLabel,
  staticSocialCards,
  twitterImagePath,
  type SocialCard,
} from "../src/utils/social";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const postsDirectory = path.join(projectRoot, "src/content/blog");
const outputDirectory = path.join(projectRoot, "public/social");
const serifFontPath = path.join(
  projectRoot,
  "node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2",
);
const monoFontPath = path.join(
  projectRoot,
  "node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2",
);

type Frontmatter = {
  title?: string;
  tags?: string[];
  draft?: boolean;
};

function extractFrontmatter(source: string): Frontmatter {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
  return match ? (parse(match[1]) as Frontmatter) : {};
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.(md|mdx)$/, "").replace(/\/index$/, "");
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function glyphWidth(character: string): number {
  if (/\s/.test(character)) return 0.28;
  if (/[MW@%&]/.test(character)) return 0.9;
  if (/[A-Z]/.test(character)) return 0.7;
  if (/[a-z0-9]/.test(character)) return 0.52;
  if (/[.,:;!'“”‘’|il]/.test(character)) return 0.27;
  if (/[-–—]/.test(character)) return 0.42;
  return 0.92;
}

function textWidth(value: string, fontSize: number): number {
  return [...value].reduce((width, character) => width + glyphWidth(character), 0) * fontSize;
}

function wrapTitle(title: string, fontSize: number, maxWidth: number): string[] {
  const words = title.trim().split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;

    if (line && textWidth(candidate, fontSize) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function titleLayout(title: string): { fontSize: number; lines: string[] } {
  for (let fontSize = 94; fontSize >= 58; fontSize -= 2) {
    const lines = wrapTitle(title, fontSize, 920);
    if (lines.length <= 3 && lines.every((line) => textWidth(line, fontSize) <= 920)) {
      return { fontSize, lines };
    }
  }

  return { fontSize: 58, lines: wrapTitle(title, 58, 920) };
}

function renderCard(
  title: string,
  serifFont: string,
  monoFont: string,
): string {
  const { fontSize, lines } = titleLayout(title);
  const lineHeight = fontSize * 1.04;
  const firstBaseline = 218;
  const titleLines = lines
    .map(
      (line, index) =>
        `<tspan x="84" y="${firstBaseline + index * lineHeight}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <font-face font-family="Social Serif">
          <font-face-src><font-face-uri href="data:font/woff2;base64,${serifFont}" /></font-face-src>
        </font-face>
        <font-face font-family="Social Mono">
          <font-face-src><font-face-uri href="data:font/woff2;base64,${monoFont}" /></font-face-src>
        </font-face>
        <radialGradient id="wash" cx="88%" cy="10%" r="62%">
          <stop offset="0" stop-color="#1d5e54" stop-opacity="0.09" />
          <stop offset="1" stop-color="#1d5e54" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#f4f2ec" />
      <rect width="1200" height="630" fill="url(#wash)" />
      <g fill="none" stroke="#171815" stroke-opacity="0.1">
        <circle cx="1110" cy="74" r="150" />
        <circle cx="1110" cy="74" r="216" />
        <line x1="1018" y1="0" x2="1018" y2="630" />
      </g>
      <circle cx="1110" cy="74" r="7" fill="#1d5e54" />
      <text x="84" y="82" fill="#1d5e54" font-family="Social Mono, monospace" font-size="22" letter-spacing="2.2">BORDUMB</text>
      <text fill="#171815" font-family="Social Serif, serif" font-size="${fontSize}" font-weight="400" letter-spacing="-2.4">${titleLines}</text>
      <line x1="84" y1="536" x2="1116" y2="536" stroke="#171815" stroke-opacity="0.22" />
      <text x="84" y="580" fill="#64655e" font-family="Social Mono, monospace" font-size="17" letter-spacing="1.5">BORDUMB.COM</text>
    </svg>`;
}

function renderIcon(serifFont: string): string {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <defs>
        <font-face font-family="Social Serif">
          <font-face-src><font-face-uri href="data:font/woff2;base64,${serifFont}" /></font-face-src>
        </font-face>
        <radialGradient id="wash" cx="86%" cy="12%" r="76%">
          <stop offset="0" stop-color="#1d5e54" stop-opacity="0.12" />
          <stop offset="1" stop-color="#1d5e54" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="512" height="512" rx="84" fill="#f4f2ec" />
      <rect width="512" height="512" rx="84" fill="url(#wash)" />
      <g fill="none" stroke="#171815" stroke-opacity="0.1">
        <circle cx="446" cy="70" r="116" />
        <circle cx="446" cy="70" r="164" />
      </g>
      <circle cx="446" cy="70" r="10" fill="#1d5e54" />
      <text x="58" y="376" fill="#171815" font-family="Social Serif, serif" font-size="310" font-weight="400" letter-spacing="-12">b</text>
    </svg>`;
}

async function blogCards(): Promise<SocialCard[]> {
  const filenames = (await readdir(postsDirectory, { recursive: true }))
    .filter((filename) => /\.(md|mdx)$/.test(filename))
    .sort();
  const cards: SocialCard[] = [];
  const tags = new Set<string>();

  for (const filename of filenames) {
    const source = await readFile(path.join(postsDirectory, filename), "utf8");
    const frontmatter = extractFrontmatter(source);

    if (frontmatter.draft || !frontmatter.title) continue;

    const slug = slugFromFilename(filename);
    cards.push({ pathname: `/blog/${slug}/`, title: frontmatter.title });
    frontmatter.tags?.forEach((tag) => tags.add(tag));
  }

  for (const tag of [...tags].sort()) {
    cards.push({ pathname: `/blog/tags/${tag}/`, title: socialTagLabel(tag) });
  }

  return cards;
}

const [serifFont, monoFont, posts] = await Promise.all([
  readFile(serifFontPath, "base64"),
  readFile(monoFontPath, "base64"),
  blogCards(),
]);

await rm(outputDirectory, { recursive: true, force: true });

for (const card of [...staticSocialCards, ...posts]) {
  const relativeOutput = socialImagePath(card.pathname).replace(/^\//, "");
  const outputPath = path.join(projectRoot, "public", relativeOutput);
  const relativeTwitterOutput = twitterImagePath(card.pathname).replace(/^\//, "");
  const twitterOutputPath = path.join(projectRoot, "public", relativeTwitterOutput);
  const cardSvg = Buffer.from(renderCard(card.title, serifFont, monoFont));
  await mkdir(path.dirname(outputPath), { recursive: true });
  await mkdir(path.dirname(twitterOutputPath), { recursive: true });
  await sharp(cardSvg)
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
  await sharp(cardSvg)
    .resize(1200, 600, { fit: "cover" })
    .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
    .toFile(twitterOutputPath);
}

await sharp(Buffer.from(renderIcon(serifFont)))
  .png({ compressionLevel: 9 })
  .toFile(path.join(projectRoot, "public/icon.png"));

console.log(
  `Generated ${staticSocialCards.length + posts.length} Open Graph and Twitter card pairs, plus the site icon.`,
);
