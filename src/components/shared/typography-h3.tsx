import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: ReactNode;
  text: string;
}
const TypographyH3: FC<Props> = ({ className, text }) => {
  return (
    <h1
      className={cn(
        "text-black dark:text-white scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {text}
    </h1>
  );
};
export default TypographyH3;
