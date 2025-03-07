"use client"

import Link from "next/link";
import { Copy, Eye, FilePlus } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { NotificationError, NotificationSucces } from "@/lib/alerts";

const page = () => {
  const { copy } = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    console.log(text);
    copy(text)
      .then(() => {
        NotificationSucces("Enlace copiado");
        console.log('Copied!', { text })
      })
      .catch(error => {
        NotificationError("Error al copiar");
        console.error('Failed to copy!', error)
      })
  }

  return (
    <div className="relative flex flex-col items-center gap-6 pt-20 w-full">
      <Link href="/dash/form" className="top-0 right-2 z-10 absolute flex justify-center items-center mt-2 p-2 border border-primary rounded-md">
        <FilePlus className="text-primary" />
      </Link>
      <table className="border max-md:border-0 max-md:last:border-b-0 rounded-md max-w-[1000px] border-collapse table-fixed">
        <thead className="max-md:hidden">
          <tr className="max-md:block max-md:mb-2 max-md:border-b-4">
            <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
              Fecha de creación
            </th>
            <th className="py-3 lg:w-[30%] text-[12px] text-center uppercase">
              Enlace
            </th>
            <th className="py-3 lg:w-[30%] text-[12px] text-center uppercase">
              Nuevo Enlace
            </th>
            <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
              Copiar
            </th>
            <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
              Ver
            </th>
            <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-[#e6e3e3] dark:hover:bg-zinc-900 dark:even:bg-zinc-800 even:bg-[#f2f2f2] border border-gray-300"
          >
            <td
              data-label="Descripción"
              className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
            >
              2025/03/07
            </td>
            <td
              data-label="Enlace"
              className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
            >
              https://qwik.dev/docs/getting-started/
            </td>
            <td
              data-label="Nuevo Enlace"
              className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
            >
              https://slug/Ghv45g
            </td>
            <td
              data-label="Copiar"
              className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
            >
              {/* <CopyToClipboard
                text={textCopied.value}
                onCopy={() => setTextCopied({
                  ...textCopied,
                  copied: true
                })}> */}
              <Button onClick={() => handleCopy("https://slug/Ghv45g")}>
                <Copy className="text-white" />
              </Button>
              {/* </CopyToClipboard> */}

            </td>
            <td
              data-label="Ver"
              className="max-md:block p-2 border-gray-600 max-md:border-b-[1px] max-md:text-[12px] text-sm text-center max-md:text-right"
            >
              <Button>
                <Eye className="text-white" />
              </Button>
            </td>
            <td
              data-label="Opción"
              className="max-md:block p-2 border-gray-600 max-md:border-b-[1px] max-md:text-[12px] text-sm text-center max-md:text-right"
            >
              <Switch />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
export default page