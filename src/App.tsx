import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type FormHTMLAttributes,
} from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { formInputsList } from "./data";
import Input from "./components/Input";
import type { IProduct } from "./interfaces";
import {productValidation} from "./validation/productValidation"
import ErrorMessage from "./components/ErrorMessage";

interface IProps {}
const App = ({}: IProps) => {
  const defualtProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
    category: {
      name: "",
      imageURL: "",
    },
  };
  let [isOpen, setIsOpen] = useState(false);
  let [errors, setErrors] = useState<{title: string,description: string,imageURL: string,price: string}>({title: "",description: "",imageURL: "",price: ""});
  let [product, setProduct] = useState<IProduct>(defualtProductObj);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setProduct({...product,[name]:value})
    setErrors({...errors,[name]:""})
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    const {title,description,imageURL,price}=product
    e.preventDefault();
    const errors = productValidation(product);
    setErrors(errors);
 const hasError = Object.values(errors).some(v => v !== "") 
 if (hasError) {
     console.log(errors);
    return 
   }
     console.log({title,description,imageURL,price});
  };
  const onCancel = () => {
    console.log("cancel");
    setProduct(defualtProductObj);
    close()
  };
  return (
    <>
      <Button className="bg-indigo-500" width="w-full" onClick={open}>
        ADD NEW Product
      </Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-6">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <Modal title="Adding Product" isOpen={isOpen} closeModel={close}>
        <form onSubmit={submitHandler}>
          {formInputsList.map((input) => {
            return (
              <div className="flex flex-col space-y-2 mb-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor={input.id}
                >
                  {input.label}
                </label>
                <Input name={input.name} id={input.id} type={input.type} onChange={onChangeHandler} />
              
              {errors[input.name as keyof typeof errors] && (
                <ErrorMessage msg={errors[input.name as keyof typeof errors]} />
              )}
              </div>
            );
          })}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-500 ">Submit</Button>
            <Button className="bg-gray-500 " onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default App;
