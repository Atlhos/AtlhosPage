import { memo } from "react"
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<'button'> {
  asChild?: boolean
}

function ButtonOne({className, asChild=false,...rest }: ButtonProps) {
  return (
    <Button
      variant="outline" asChild={asChild}
      className={clsx("bg-main text-white hover:bg-mainDark hover:text-white border-none", className)}
      {...rest}
    >
      
    </Button>
  )
}

export default memo(ButtonOne);
