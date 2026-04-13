import type { ReactNode } from "react"

interface IProps{
children:ReactNode,
className?:string
width?:"w-fit"|"w-full"
}
const Button = ({className,children,width="w-full"}:IProps) => {
  return (
    <>
<button className={`${className} ${width} text-white px-2 py-2 rounded-md cursor-pointer`}>{children}</button>
    </>
  )
}
export default Button 