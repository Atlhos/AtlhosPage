import { memo } from "react"
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<'button'> {
  text: string;
}

function ButtonTwo({ text, className, ...rest }: ButtonProps) {
  return (
    <Button
      variant="outline"
      className={clsx("bg-mainLight text-black hover:bg-main hover:text-black border-none font-bold", className)}
      {...rest}
    >
      {text}
    </Button>
  )
}

export default memo(ButtonTwo);
