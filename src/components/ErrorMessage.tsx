interface IProps{
    msg:string
}
const ErrorMessage = ({msg}:IProps) => {
  return (
    <div>
      <span className="text-red-500 text-sm">{msg}</span>      
    </div>
  )
}

export default ErrorMessage
