import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { formInputsList } from "./data";
import Input from "./components/Input";

interface IProps {}
const App = ({}: IProps) => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <Button className="bg-indigo-500" width="w-fit" onClick={open}>
        ADD NEW Product
      </Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-6">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <Modal title="Adding Product" isOpen={isOpen} closeModel={close}>
<form>
      {formInputsList.map((input) => {
            return (
              <div className="flex flex-col space-y-2 mb-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor={input.id}
                >
                  {input.label}
                </label>
                <Input name={input.name} id={input.id} type={input.type} />
              </div>
            );
          })}
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-500 ">Submit</Button>
          <Button className="bg-gray-500 ">Cancel</Button>
        </div>
</form>
      </Modal>
    </>
  );
};

export default App;
