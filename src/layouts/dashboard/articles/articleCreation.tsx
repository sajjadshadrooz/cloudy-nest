"use client";

import { useArticleAPI } from "@/services/hooks/articles/article";
import { ArticleForm } from "./components/articleForm";

export const ArticleCreation = () => {
  const { postArticle } = useArticleAPI();

  const initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: [],
  };

  const handleSubmit = async (
    values: typeof initialValues,
    setSubmitting: any
  ) => {
    await postArticle(values);
    setSubmitting(false);
  };

  return (
    <ArticleForm
      title="New Article"
      variant="create"
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};
