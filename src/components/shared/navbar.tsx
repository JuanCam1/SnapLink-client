import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

import Options from "./options";
import TypographyH2 from "./typography-h2";

const Navbar = () => {
  return (
    <nav className="top-0 z-20 fixed flex justify-center bg-white dark:bg-zinc-900 max-lg:px-4 border-zinc-200 dark:border-zinc-800 border-b w-full h-16 start-0">
      <div className="flex flex-wrap justify-between items-center mx-auto py-2 w-[1000px]">
        <Link href="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex justify-center items-center h-11 overflow-hidden">
              <LinkIcon className="h-5 group-hover:rotate-12 hover:scale-105 group-hover:scale-110 transition-transform duration-300 ease-in-out transform" />
            </div>
            <TypographyH2
              text="SnapLink"
            />
          </div>
        </Link>
        <Options />
      </div>
    </nav>
  )
}
export default Navbar;