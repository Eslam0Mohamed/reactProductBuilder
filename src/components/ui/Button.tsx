import type { ReactNode } from "react"

interface IProps{
children:ReactNode,
className?:string,
onClick?:()=>void,
width?:"w-fit"|"w-full",
}
const Button = ({className,children,width="w-full",onClick}:IProps) => {
  return (
    <>
<button className={`${className} ${width} text-white px-2 py-2 rounded-md cursor-pointer`} onClick={onClick}>{children}</button>
    </>
  )
}
export default Button 