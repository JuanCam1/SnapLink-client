import Link from "next/link";
import { Suspense } from "react";
import { FilePlus } from "lucide-react";
import TableLink from "@/feature/link/sections/table-link";

const ListLinkPage = async () => {
  return (
    <div className="relative flex flex-col items-center gap-6 pt-20 w-full">
      <Link href="/dash/form" className="top-0 right-2 z-10 absolute flex justify-center items-center mt-2 p-2 border border-primary rounded-md">
        <FilePlus className="text-primary" />
      </Link>
      <Suspense fallback={<div>cargando...</div>}>
        <TableLink />
      </Suspense>

    </div>
  )
}
export default ListLinkPage;