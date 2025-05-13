"use client";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI } from "@/services/utils/handler";
import { getTagsAPI } from "@/services/api/tag";

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

  return { getTags };
};
