import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

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
      <Button
        className="bg-indigo-500"
        width="w-fit"
        onClick={open}
      >
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
        <div className="flex items-center gap-4">
          <Button className="bg-indigo-500 ">Submit</Button>
          <Button className="bg-gray-500 ">Cancel</Button>
        </div>
      </Modal>
    </>
  );
};

export default App;
