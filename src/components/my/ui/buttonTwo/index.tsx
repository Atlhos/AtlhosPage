import { memo } from "react"
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<'button'> {
  asChild?: boolean
}

function ButtonTwo({ asChild = false, className, ...rest }: ButtonProps) {
  return (
    <Button
      variant="outline" asChild={asChild}
      className={clsx("bg-mainLight text-black hover:bg-main hover:text-white border-none font-bold", className)}
      {...rest}
    >
    </Button>
  )
}

export default memo(ButtonTwo);
