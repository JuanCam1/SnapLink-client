import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  text: string;
  textColor?: string;
  Icon: LucideIcon | undefined;
}

const MessageQuery: FC<Props> = ({ text, textColor, Icon, children }) => {
  return (
    <div className="flex justify-center items-center gap-3 md:col-span-3 lg:col-span-7 py-4 w-full">
      {Icon && <Icon className="w-6 h-6" />}
      <span
        className={cn(
          "font-semibold text-xl text-black dark:text-white",
          textColor,
        )}
      >
        {text}
      </span>
      {children}
    </div>
  );
};
export default MessageQuery;
