export type SocialCard = {
  pathname: string;
  title: string;
};

export const staticSocialCards: SocialCard[] = [
  { pathname: "/", title: "About me" },
  { pathname: "/blog/", title: "Ideas worth exposing." },
  { pathname: "/work/", title: "Five questions, made executable." },
  { pathname: "/404", title: "Nothing here." },
];

export function socialImagePath(pathname: string): string {
  const normalized = pathname.replace(/^\/+|\/+$/g, "");
  const filename = normalized || "index";

  return `/social/${filename}.png`;
}

export function socialTagLabel(tag: string): string {
  return tag
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
