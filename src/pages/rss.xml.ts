import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postSlug, publishedPosts } from "@/utils/content";

export async function GET(context: { site: URL }) {
  const posts = publishedPosts(await getCollection("blog"));
  return rss({
    title: "bordumb — writing",
    description:
      "Notes on identity, bounded authority, verification, formal methods, and human trust.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${postSlug(post)}/`,
    })),
  });
}
