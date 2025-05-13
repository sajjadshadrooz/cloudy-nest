"use client";

import { useArticleAPI } from "@/services/hooks/articles/article";
import { ArticleForm } from "./components/articleForm";
import { useEffect, useState } from "react";

export const ArticleUpdate = ({
  slug,
}: {
  slug: string | string[] | undefined;
}) => {
  const { getArticle, putArticle } = useArticleAPI();

  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });

  const handleSubmit = async (
    values: typeof initialValues,
    setSubmitting: any
  ) => {
    await putArticle(slug, values);
    setSubmitting(false);
  };

  const getDataFromServer = async () => {
    const result = await getArticle(slug);
    setInitialValues({
      title: result.title || "",
      description: result.description || "",
      body: result.body || "",
      tagList: result.tagList || [],
    });
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <ArticleForm
      title="Update Article"
      variant="update"
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};
