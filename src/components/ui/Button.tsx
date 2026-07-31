import type { ReactNode } from "react"

interface IProps{
children:ReactNode,
className?:string,
onClick?:()=>void,
width?:"w-fit"|"w-full",
type?:"button"|"submit"|"reset"
}
const Button = ({className,children,width="w-full",onClick,type="submit"}:IProps) => {
  return (
    <>
<button className={`${className} ${width} text-white px-2 py-2 rounded-md cursor-pointer`} onClick={onClick} type={type}>
      {children}
    </button>
    </>
  )
}
export default Button 