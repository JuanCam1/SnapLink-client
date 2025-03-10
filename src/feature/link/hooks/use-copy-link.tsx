import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { CircleX } from "lucide-react";

const useCopyLink = () => {
  const { copy } = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    console.log(text);
    copy(text)
      .then(() => {
        toast({
          duration: 2000,
          variant: "default",
          title: "Enlace copiado",
          action: <ToastAction altText="Salir">
            <CircleX />
          </ToastAction>
        })
        console.log('Copied!', { text })
      })
      .catch(error => {
        toast({
          duration: 2000,
          variant: "destructive",
          title: "Error al copiar",
          action: <ToastAction altText="Salir">
            <CircleX />
          </ToastAction>
        })
        console.error('Failed to copy!', error)
      })
  }

  return {
    handleCopy
  }
}
export default useCopyLink