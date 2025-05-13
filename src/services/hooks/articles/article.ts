"use client";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI, successHandler } from "@/services/utils/handler";
import { getArticlesAPI, postArticleAPI } from "@/services/api/articles";
import { ArticleAPIInterface } from "@/services/types/article";

export const useArticleAPI = () => {
  const { showToast } = useToast();

  const getArticles = async () => {
    try {
      const data = await getArticlesAPI();
      const { articles } = data;

      return articles || [];
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  const postArticle = async (values: Partial<ArticleAPIInterface>) => {
    try {
      const data = await postArticleAPI(values);
      const { article } = data;

      successHandler(showToast, "Article created successfuly");

      return article;
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  return { getArticles, postArticle };
};
