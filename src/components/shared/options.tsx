"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeModeToggle } from "./toggle-mode";
import { ThemeColorToggle } from "./toggle-color";

const options = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-4">
      <ThemeColorToggle />
      <ThemeModeToggle />

      {!pathname.includes("dash") ? (
        !pathname.includes("auth/login") && (
          <Link
            href="/auth/login"
            className="group flex justify-center items-center gap-2 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-2 border-[0.5px] dark:border-zinc-800 rounded-md text-black dark:text-white hover:scale-105 transition duration-300 ease-in-out transform"
          >
            <span className="text-sm">Iniciar</span>
            <ArrowRight className="h-5 transition-transform group-hover:translate-x-1 duration-300 ease-in-out transform" />
          </Link>
        )
      ) : (
        <button
          type="button"
          className="group flex justify-center items-center gap-2 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-2 border-[0.5px] dark:border-zinc-800 rounded-md text-black dark:text-white hover:scale-105 transition duration-300 ease-in-out transform"
        >
          <span className="text-sm">Salir</span>
          <ArrowLeft className="h-5 transition-transform group-hover:translate-x-1 duration-300 ease-in-out transform" />
        </button>
      )}
    </div>
  )
}
export default options