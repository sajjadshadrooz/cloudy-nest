import { baseUrl } from "@/configs/setting";

export const extractErrors = (errorObject: Record<string, string[]>) => {
  return Object.entries(errorObject)
    .map(([key, messages]) => `${key}: ${messages.join("، ")}`)
    .join(" | ");
};

// 401 handler
export const authorizationRequired = (
  showToast: any,
  message?: string,
  title?: string
) => {
  localStorage.removeItem("access_token");

  showToast(
    title ?? "Unauthorized!",
    message ?? "your session expired.",
    "error"
  );

  window.location.replace(`${baseUrl}/login`);
};

// ^200 handler
export const successHandler = (
  showToast: any,
  message?: string,
  title?: string
) => {
  showToast(
    title ?? "Successful",
    message ?? "Action done completely.",
    "success"
  );
};

export const errorHandlerAPI = (showToast: any, error: any) => {
  try {
    if (error.response) {
      const { status, data } = error.response;
      const { errors, message } = data;

      const description = message || extractErrors(errors);

      switch (status) {
        case 422:
          showToast(
            "Bad Request!",
            description ?? "Check your parameters.",
            "error"
          );
          break;

        case 401:
          authorizationRequired(showToast, description);
          break;

        case 403:
          showToast("Access denied!", description, "error");
          break;

        default:
          if (status >= 500) {
            showToast("Server error!", "Something happend in server.", "error");
          }
          break;
      }
    } else if (error.request) {
      if (error.code === "ERR_NETWORK") {
        showToast("Network error!", "Lack of access to Server.", "error");
      } else {
        showToast("Server error!", "Something happend in server.", "error");
      }
    } else {
      showToast("Internal error!", "Something happend wrong.", "error");
    }
  } catch {
    showToast("Internal error!", "Something happend wrong.", "error");
  }
};
