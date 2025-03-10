"use client"

import type { FC } from "react";
import { Copy } from "lucide-react";
import useCopyLink from "../hooks/use-copy-link";
import { Button } from "@/components/ui/button";

interface Props {
  url: string
}
const ButtonCopy: FC<Props> = ({ url }) => {
  const { handleCopy } = useCopyLink();
  return (
    <Button
      onClick={() => handleCopy("https://slug/Ghv45g")}
      className="max-sm:px-3 max-sm:py-1"
    >
      <Copy className="text-white" />
    </Button>
  )
}
export default ButtonCopy