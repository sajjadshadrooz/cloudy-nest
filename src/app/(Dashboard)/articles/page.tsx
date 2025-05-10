import { Section } from "@/components/section/section";
import { ArticleList } from "@/layouts/dashboard/articles/articleList";

export default function Articles() {
  return (
    <Section title="All Posts">
      <ArticleList />
    </Section>
  );
}
