interface IProps {
color:string
onClick?:()=>void
}
const CircleColor = ({ color, onClick }: IProps) => {
  return (
    <div>
      <span className="w-6 h-6 block rounded-full" style={{ backgroundColor: color }} onClick={onClick}></span>
    </div>
  )
}

export default CircleColor
