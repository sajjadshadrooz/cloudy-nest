"use client";

import { useRouter } from "next/navigation";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI, successHandler } from "@/services/utils/handler";
import {
  deleteArticlesAPI,
  getArticleAPI,
  getArticlesAPI,
  postArticleAPI,
  putArticleAPI,
} from "@/services/api/articles";
import { ArticleAPIInterface } from "@/services/types/article";

export const useArticleAPI = () => {
  const { showToast } = useToast();
  const router = useRouter();

  const getArticle = async (slug: any) => {
    try {
      const data = await getArticleAPI(slug);
      const { article } = data;

      return article;
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
      return {};
    }
  };

  const getArticles = async (query: any) => {
    try {
      const data = await getArticlesAPI(query);
      const { articles, articlesCount } = data;

      return {
        articles: articles || [],
        articlesCount,
      };
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
      return {
        articles: [],
        articlesCount: 0,
      };
    }
  };

  const postArticle = async (values: Partial<ArticleAPIInterface>) => {
    try {
      const data = await postArticleAPI(values);
      const { article } = data;

      successHandler(showToast, "Article created successfuly");
      router.push("/articles");

      return article;
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  const putArticle = async (
    slug: any,
    values: Partial<ArticleAPIInterface>
  ) => {
    try {
      await putArticleAPI(slug, values);

      successHandler(showToast, "Article created successfuly");
      router.push("/articles");
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  const deleteArticle = async (slug: string) => {
    try {
      const data = await deleteArticlesAPI(slug);

      successHandler(showToast, "Article deleted successfuly");
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  return { getArticle, getArticles, postArticle, putArticle, deleteArticle };
};
