"use client";

import { useParams } from "next/navigation";

import { Section } from "@/components/section/section";
import { ArticleList } from "@/layouts/dashboard/articles/articleList";

export default function Articles() {
  const { page } = useParams();

  return (
    <Section title="All Posts">
      <ArticleList currentPage={page} />
    </Section>
  );
}
