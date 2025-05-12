"use client";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI, successHandler } from "@/services/utils/handler";
import { currentUserAPI } from "@/services/api/auth";
import { baseUrl } from "@/configs/setting";

export const useUserAPI = () => {
  const { showToast } = useToast();

  const me = async () => {
    try {
      const data = await currentUserAPI();
      const { user } = data;

      return user;
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  const logout = async () => {
    successHandler(showToast, "You logout completely.");
    localStorage.removeItem("access_token");
    window.location.replace(`${baseUrl}/login`);
  };

  return { me, logout };
};
