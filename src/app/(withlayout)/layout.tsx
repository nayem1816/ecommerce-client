"use client";

import Header from "@/components/Header/Header";
import { useGetMyUserInfoQuery } from "@/redux/api/authApi";
import { isLoggedIn } from "@/services/authService";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, ReactNode } from "react";

const WithoutLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = getFromLocalStorage("accessToken");

  const router = useRouter();

  const {
    data,
    isLoading: myInfoLoading,
    isSuccess,
  } = useGetMyUserInfoQuery({
    accessToken,
  });

  if (!myInfoLoading && isSuccess) {
    setToLocalStorage("userInfo", data?.data);
  }

  const isUserLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }

    setIsLoading(false);
  }, [isUserLoggedIn, router]);

  if (isLoading || myInfoLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default WithoutLayout;
