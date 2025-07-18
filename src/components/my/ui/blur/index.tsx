import{ memo } from "react"

function Blur (){
    return(
        <span className="h-16 w-full fixed top-0 backdrop-blur-[2px] left-0 z-20 opacity-100"/>
    )
}

export default memo(Blur);