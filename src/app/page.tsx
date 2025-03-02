import Link from "next/link";
import TypographyP from "@/components/shared/typography-p";
import { Link as LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-5/6">
      <TypographyP className="opacity-0 font-extrabold text-primary dark:text-primary text-6xl animate-slide-up">
        SnapLink
      </TypographyP>
      <TypographyP className="opacity-0 lg:w-[50%] text-black dark:text-gray-300 text-center text-pretty animate-slide-up delay-200">
        Es una plataforma de acortador de enlaces que permite a los usuarios
        crear, administrar y compartir enlaces con facilidad
      </TypographyP>

      <Link
        href="/auth/login"
        type="button"
        className="group flex justify-center items-center gap-2 bg-primary hover:bg-primary/70 px-4 py-3 rounded-md font-semibold text-secondary hover:scale-105 transition duration-300 ease-in-out transform"
      >
        <LinkIcon className="h-5 text-secundary group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ease-in-out transform" />
        Crear Link
      </Link>
    </div>
  );
}


// <main className="flex flex-col justify-between items-center p-24 min-h-screen">
//       <div className="z-10 lg:flex justify-between items-center w-full max-w-5xl font-mono text-sm">
//         <p
//           className="top-0 left-0 lg:static fixed flex justify-center lg:bg-gray-200 lg:dark:bg-zinc-800/30 dark:bg-zinc-800/30 bg-gradient-to-b from-zinc-200 dark:from-inherit backdrop-blur-2xl lg:p-4 pt-8 pb-6 lg:border border-gray-300 dark:border-neutral-800 border-b lg:rounded-xl w-full lg:w-auto text-primary"
//         >
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div
//           className="bottom-10 left-0 lg:static fixed flex justify-center items-end gap-x-1 bg-gradient-to-t from-white dark:from-black via-white dark:via-black lg:bg-none w-full h-48 lg:size-auto"
//         >
//           <ThemeColorToggle />
//           <ThemeModeToggle />
//         </div>
//       </div>
//     </main>