"use client";

import { useRegisterUserMutation } from "@/redux/api/authApi";
import { Card } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password must be the same");

      return;
    }

    const res = await registerUser(data);

    if ("data" in res) {
      if ("success" in res.data) {
        toast.success("User created successfully");

        router.push("/login");
      }
    } else if ("error" in res) {
      if ("message" in res.error) {
        toast.error(res.error.message);
      } else {
        toast.error("An error occurred");
      }
    } else {
      toast.error("An error occurred");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl my-10 container mx-auto px-2">
      <Card>
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
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
          <div className="mb-2">
            <label
              htmlFor="password2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Confirm password
            </label>
            <input
              placeholder="********"
              type="password"
              id="password2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="">
            <button
              className={`bg-cyan-400 text-white duration-500 hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}>
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4 gap-4">
          Do you have an account?{" "}
          <Link className="underline" href="/login">
            Go to login page
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
