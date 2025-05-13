"use client";

import { ArticleUpdate } from "@/layouts/dashboard/articles/articleUpdate";
import { useParams } from "next/navigation";

export default function Articles() {
  const { slug } = useParams();

  return <ArticleUpdate slug={slug} />;
}
