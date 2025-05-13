"use client";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI, successHandler } from "@/services/utils/handler";
import { baseUrl } from "@/configs/setting";
import { getTagsAPI, postTagsAPI } from "@/services/api/tag";
import { TagAPIInterface } from "@/services/types/tag";

export const useTagAPI = () => {
  const { showToast } = useToast();

  const getTags = async () => {
    try {
      const data = await getTagsAPI();
      const { tags } = data;

      return tags || [];
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  const postTags = async (title: string) => {
    try {
      const data = await postTagsAPI({ title });
      const { tags } = data;

      return tags || [];
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  return { getTags, postTags };
};
