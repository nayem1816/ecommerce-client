"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/authService";
import { Card } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await userLogin(data);

    if ("data" in res && res.data.success) {
      toast.success("Login success", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      storeUserInfo({ accessToken: res?.data?.data?.accessToken });

      router.push("/");
    } else if ("error" in res) {
      if ("message" in res.error) {
        toast.error(res.error.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <div className="max-w-xl my-10 container mx-auto px-2">
      <Card>
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your password
            </label>
            <input
              placeholder="********"
              type="password"
              id="password1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2"></div>
            <Link className="underline" href="/forget">
              Forget password
            </Link>
          </div>
          <div className="">
            <button
              className={`bg-cyan-400 text-white duration-500 hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4 gap-4">
          Do not have an account?{" "}
          <Link className="underline" href="/signup">
            Create account
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
