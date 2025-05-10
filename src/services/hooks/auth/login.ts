"use client";

import { useRouter } from "next/navigation";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI, successHandler } from "@/services/utils/handler";
import { RegisterAPIInterface } from "@/services/types/auth";
import { loginAPI } from "@/services/api/auth";

export const useLoginAPI = () => {
  const { showToast } = useToast();
  const router = useRouter();

  const login = async (values: Partial<RegisterAPIInterface>) => {
    try {
      const data = await loginAPI(values);

      const { user } = data;
      const { token } = user;

      if (token) {
        localStorage.setItem("access_token", `Token ${token}`);
      }

      successHandler(showToast, "login completed.");

      router.push("/articles");
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  return { login };
};
