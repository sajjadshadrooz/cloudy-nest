import { TagAPIInterface } from "../types/tag";
import axios from "../utils/axios";

export const getTagsAPI = async () => {
  const res = await axios.get("/tags");
  return res.data;
};

export const postTagsAPI = async (data: Partial<TagAPIInterface>) => {
  const res = await axios.post("/tags", { tag: data });
  return res.data;
};
