import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast";
import { createLinkSchema } from "../schemas/create-link-schema";
import { createLinkService } from "../services/link-service";
import { ToastAction } from "@/components/ui/toast";
import { CircleX } from "lucide-react";

const useCreateLink = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof createLinkSchema>>({
    resolver: zodResolver(createLinkSchema),
    defaultValues: {
      url_link: "",
      description_url: "",
      status_link: "ACTIVE",
    },
  })

  const onSubmit = (values: z.infer<typeof createLinkSchema>) => {
    try {
      console.log(values)
      createLinkService(values)
        .then(response => {
          if (response.status !== 200) {
            throw Error("Error al crear el link")
          }
          toast({
            duration: 2000,
            variant: "default",
            title: "Creado el link",
            action: <ToastAction altText="Salir">
              <CircleX />
            </ToastAction>
          })
          form.reset();
        })
    } catch (error) {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Creado el link",
        action: <ToastAction altText="Salir">
          <CircleX />
        </ToastAction>
      })
      console.log(error)
    }
  }
  return {
    form,
    onSubmit,
  }
}
export default useCreateLink;