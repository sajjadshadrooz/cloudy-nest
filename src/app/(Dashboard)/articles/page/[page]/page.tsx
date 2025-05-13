"use client";

import { useParams } from "next/navigation";

import { Section } from "@/components/section/section";
import { ArticleList } from "@/layouts/dashboard/articles/articleList";

export default function Articles() {
  const { page } = useParams();
  const pageNumber = Number.isNaN(Number(page)) ? 1 : Number(page);

  return (
    <Section title="All Posts">
      <ArticleList currentPage={pageNumber} />
    </Section>
  );
}
