import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { createLinkSchema } from "../schemas/create-link-schema";

const useCreateLink = () => {
  const form = useForm<z.infer<typeof createLinkSchema>>({
    resolver: zodResolver(createLinkSchema),
    defaultValues: {
      url_link: "",
      description_url: "",
      status_link: "ACTIVE",
    },
  })

  const onSubmit = (values: z.infer<typeof createLinkSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return {
    form,
    onSubmit,
  }
}
export default useCreateLink;