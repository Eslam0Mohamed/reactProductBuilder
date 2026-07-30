import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type FormHTMLAttributes,
} from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { categories, colors, formInputsList, productsList } from "./data";
import Input from "./components/Input";
import type { ICategory, IProduct } from "./interfaces";
import { productValidation } from "./validation/productValidation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import Select from "./components/ui/Select";

interface IProps {}
const App = ({}: IProps) => {
  const defualtProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  let [isOpen, setIsOpen] = useState(false);
  let [tempColor, setTempColor] = useState<string[]>([]);
  let [errors, setErrors] = useState<{
    title: string;
    description: string;
    imageURL: string;
    price: string;
  }>({ title: "", description: "", imageURL: "", price: "" });
  let [products, setProducts] = useState<IProduct[]>(productsList);
  let [product, setProduct] = useState<IProduct>(defualtProductObj);
  let [selectedCategory, setSelectedCategory] = useState<ICategory>(categories[0]);

  const renderProduct = products.map((product) => (
    <ProductCard key={product.title} product={product} />
  ));
  const renderColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          return setTempColor(tempColor.filter((c) => c !== color));
        }
        setTempColor([...tempColor, color]);
      }}
    />
  ));
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    console.log(value, name);
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: " " });
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    console.log(product);
    e.preventDefault();
    const errors = productValidation(product);
    setErrors(errors);
    const hasError = Object.values(errors).some((v) => v !== "");
    if (hasError) {
      console.log(errors);
      return;
    }
    console.log("data sent to DB");
    setProducts([...products,{...product,colors:tempColor,category:selectedCategory}]);
    setProduct(defualtProductObj);
    setTempColor([]);
    close();  
    
  };
  const onCancel = () => {
    console.log("cancel");
    setProduct(defualtProductObj);
    close();
  };
  return (
    <>
      <Button className="bg-indigo-500" width="w-full" onClick={open}>
        ADD NEW Product
      </Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-6">
{renderProduct}
      </div>
      <Modal title="Adding Product" isOpen={isOpen} closeModel={close}>
        <form onSubmit={submitHandler}>
          {formInputsList.map((input) => {
            return (
              <div key={input.id} className="flex flex-col space-y-2 mb-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor={input.id}
                >
                  {input.label}
                </label>
                <Input
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  onChange={onChangeHandler}
                />

                {errors[input.name as keyof typeof errors] && (
                  <ErrorMessage
                    msg={errors[input.name as keyof typeof errors]}
                  />
                )}
              </div>
            );
          })}
          <div>
            {tempColor.map((color) => (
              <span
                key={color}
                className=" inline-block rounded-md m-1 p-1 text-white text-sm"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">{renderColors}</div>
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center mt-2 space-x-3">
            <Button className="bg-indigo-500 ">Submit</Button>
            <Button className="bg-gray-500 " type="button" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default App;
