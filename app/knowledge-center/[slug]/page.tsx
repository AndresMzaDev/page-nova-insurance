import knowledgeData from "../../data/knowledge-center.json";
import TopicPageClient from "./TopicPageClient";

// Generate static params for all topics
export async function generateStaticParams() {
  return knowledgeData.topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TopicPageClient slug={slug} />;
}
