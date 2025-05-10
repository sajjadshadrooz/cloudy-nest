"use client";

import { useRouter } from "next/navigation";

import { useToast } from "@/contexts/toastContext";
import { errorHandlerAPI, successHandler } from "@/services/utils/handler";
import { RegisterAPIInterface } from "@/services/types/auth";
import { registerAPI } from "@/services/api/auth";

export const useRegisterAPI = () => {
  const { showToast } = useToast();
  const router = useRouter();

  const register = async (values: Partial<RegisterAPIInterface>) => {
    try {
      const data = await registerAPI(values);

      const { user } = data;
      const { token } = user;

      if (token) {
        localStorage.setItem("access_token", `Token ${token}`);
      }

      successHandler(showToast, "registeration completed.");

      router.push("/articles");
    } catch (err: any) {
      errorHandlerAPI(showToast, err);
    }
  };

  return { register };
};
