"use client";
import { AuthenticationForm } from "@/components/authentication";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  function onModeSwitch() {
    setIsLogin((prev) => !prev);
  }

  function onSubmit(e: { email: string; password: string }) {
    const email = e.email;
    const password = e.password;
    const url = isLogin ? "/api/auth/login" : "/api/auth/signup";

    axios
      .post(url, { email, password })
      .then((response) => {
        console.log("Success:", response.data);
        toast.success(
          `Welcome back, ${response.data.user.name || response.data.user.email}`
        );
        toast.success("You are now logged in.");
        router.push("/");
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 401) {
          toast.error(
            "Either username or password is invalid, please try again."
          );
        } else {
          toast.error(
            `ERR: (${error.response?.status}) ${error?.response?.statusText}`,
            {
              description: "Please try again later.",
              action: {
                label: "Retry",
                onClick: () => onSubmit(e),
              },
              closeButton: true,
            }
          );
        }
        console.error("Error:", error);
      });
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <AuthenticationForm
          onModeSwitch={onModeSwitch}
          onSubmit={onSubmit}
          isLogin={isLogin}
        />
      </div>
    </div>
  );
}
