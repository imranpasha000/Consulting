"use client"

import React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  const { theme = "system" } = useTheme();
  return (
    <Sonner
      position="top-center"
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-blue-600 group-[.toaster]:text-white group-[.toaster]:border-blue-700 group-[.toaster]:shadow-lg w-96 min-w-96 text-md",
          description: "group-[.toast]:text-blue-100 text-base",
          actionButton:
            "group-[.toast]:bg-blue-800 group-[.toast]:text-white text-base px-6 py-2",
          cancelButton:
            "group-[.toast]:bg-blue-500 group-[.toast]:text-white text-base px-6 py-2",
          error:
            "group toast group-[.toaster]:bg-red-600 group-[.toaster]:text-white group-[.toaster]:border-red-700 group-[.toaster]:shadow-lg w-96 min-w-96 text-md",
          success:
            "group toast group-[.toaster]:bg-green-600 group-[.toaster]:text-white group-[.toaster]:border-green-700 group-[.toaster]:shadow-lg w-96 min-w-96 text-md",
          warning:
            "group toast group-[.toaster]:bg-yellow-600 group-[.toaster]:text-white group-[.toaster]:border-yellow-700 group-[.toaster]:shadow-lg w-96 min-w-96 text-md",
          info:
            "group toast group-[.toaster]:bg-blue-600 group-[.toaster]:text-white group-[.toaster]:border-blue-700 group-[.toaster]:shadow-lg w-96 min-w-96 text-md",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };