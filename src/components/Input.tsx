
interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{}
const Input = ({id,name,type,}:IProps) => {
  return (
      <input type={type} name={name} id={id} className="outline-0 border border-gray-300
       focus:ring-1 focus:outline-none 
      rounded-xl shadow-md
       focus:border-indigo-500 px-3 py-2" />
  );
};

export default Input;
