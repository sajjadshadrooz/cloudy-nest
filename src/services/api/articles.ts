import { ArticleAPIInterface } from "../types/article";
import axios from "../utils/axios";

export const getArticlesAPI = async () => {
  const res = await axios.get("/tags");
  return res.data;
};

export const postArticleAPI = async (data: Partial<ArticleAPIInterface>) => {
  const res = await axios.post("/tags", { tag: data });
  return res.data;
};
