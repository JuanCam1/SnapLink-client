import { getAllListService } from "../services/get-all-list";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import ButtonCopy from "../components/button-copy";
import { Eye } from "lucide-react";
import SwitchState from "../components/switch-state";

const TableLink = async () => {
  const links = await getAllListService(1, 1, 10);
  return (
    <table className="border max-sm:border-0 max-sm:last:border-b-0 rounded-md max-sm:w-full max-w-[1000px] border-collapse table-fixed">
      <thead className="max-sm:hidden">
        <tr className="max-sm:block max-sm:mb-2 max-sm:border-b-4">
          <th className="py-3 lg:w-[20%] text-[12px] text-center uppercase">
            Fecha de creación
          </th>
          <th className="py-3 lg:w-[20%] text-[12px] text-center uppercase">
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
        {
          links.length > 0 ?
            (
              links.map(link => (
                <tr key={link.id_link} className="hover:bg-[#e6e3e3] dark:hover:bg-zinc-900 dark:even:bg-zinc-800 even:bg-[#f2f2f2] border border-gray-300"
                >
                  <td
                    data-label="Fecha de creación"
                    className="max-sm:block p-2 max-sm:border-b-[1px] overflow-hidden max-sm:text-[12px] text-sm text-center max-sm:text-right text-ellipsis whitespace-nowrap"
                  >
                    {link.createdAt_link}
                  </td>
                  <td
                    data-label="Enlace"
                    className="max-sm:block p-2 max-sm:border-b-[1px] overflow-hidden max-sm:text-[12px] text-sm text-center max-sm:text-right text-ellipsis whitespace-nowrap"
                  >
                    {link.url_link}
                  </td>
                  <td
                    data-label="Nuevo Enlace"
                    className="max-sm:block p-2 max-sm:border-b-[1px] overflow-hidden max-sm:text-[12px] text-sm text-center max-sm:text-right text-ellipsis whitespace-nowrap"
                  >
                    {link.newUrl_link}
                  </td>
                  <td
                    data-label="Copiar"
                    className="max-sm:block p-2 max-sm:border-b-[1px] overflow-hidden max-sm:text-[12px] text-sm text-center max-sm:text-right text-ellipsis whitespace-nowrap"
                  >
                    <ButtonCopy url={link.newUrl_link} />
                  </td>
                  <td
                    data-label="Ver"
                    className="max-sm:block p-2 border-gray-600 max-sm:border-b-[1px] max-sm:text-[12px] text-sm text-center max-sm:text-right"
                  >
                    <Button className="max-sm:px-3 max-sm:py-1">
                      <Eye className="text-white" />
                    </Button>
                  </td>
                  <td
                    data-label="Estado"
                    className="max-sm:block p-2 border-gray-600 max-sm:border-b-[1px] max-sm:text-[12px] text-sm text-center max-sm:text-right"
                  >
                    <SwitchState
                      state={link.status_link === "ACTIVE"}
                      id={link.id_link}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No hay enlaces
                  {JSON.stringify(links, null, 2)}
                </td>
              </tr>
            )
        }

      </tbody>
    </table>
  )
}
export default TableLink