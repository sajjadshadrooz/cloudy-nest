import { ArticleAPIInterface } from "../types/article";
import axios from "../utils/axios";

export const getArticleAPI = async (slug?: any) => {
  const res = await axios.get(`/articles/${slug}/`);
  return res.data;
};

export const getArticlesAPI = async (query?: any) => {
  const res = await axios.get("/articles", { params: query });
  return res.data;
};

export const postArticleAPI = async (data: Partial<ArticleAPIInterface>) => {
  const res = await axios.post("/articles", { article: data });
  return res.data;
};

export const putArticleAPI = async (
  slug: any,
  data: Partial<ArticleAPIInterface>
) => {
  const res = await axios.put(`/articles/${slug}/`, { article: data });
  return res.data;
};

export const deleteArticlesAPI = async (slug: string) => {
  const res = await axios.delete(`/articles/${slug}`);
  return res.data;
};
