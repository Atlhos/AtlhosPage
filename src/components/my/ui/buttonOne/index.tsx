import { memo } from "react"
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<'button'> {
  text: string;
}

function ButtonOne({ text, className, ...rest }: ButtonProps) {
  return (
    <Button
      variant="outline"
      className={clsx("bg-main text-white hover:bg-mainDark hover:text-white border-none", className)}
      {...rest}
    >
      {text}
    </Button>
  )
}

export default memo(ButtonOne);
