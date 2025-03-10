import Link from "next/link";
import { List } from "lucide-react";

import TypographyH2 from "@/components/shared/typography-h2"
import LinkForm from "@/feature/link/components/link-form"

const FormPage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-6 w-full">
      <Link href="/dash/link" className="top-0 right-2 z-10 absolute flex justify-center items-center mt-2 p-2 border border-primary rounded-md">
        <List className="text-primary" />
      </Link>
      <div className="max-sm:flex max-sm:flex-col max-sm:justify-center opacity-0 px-6 py-14 border dark:border-zinc-800 rounded-md w-full max-w-[500px] max-sm:h-full animate-slide-up">

        <TypographyH2 className="mb-10 font-extrabold text-primary dark:text-primary text-center text-pretty"
          text="Agregar Enlace"
        />
        <LinkForm />
      </div>
    </div>
  )
}
export default FormPage;