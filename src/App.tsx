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
import type { TproductName } from "./types";

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
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  let [tempColor, setTempColor] = useState<string[]>([]);
  let [errors, setErrors] = useState<{
    title: string;
    description: string;
    imageURL: string;
    price: string;
  }>({ title: "", description: "", imageURL: "", price: "" });
  let [products, setProducts] = useState<IProduct[]>(productsList);
  let [product, setProduct] = useState<IProduct>(defualtProductObj);
  let [productToEdit, setProductToEdit] = useState<IProduct>(defualtProductObj);
  let [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  let [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0],
  );
  let [confirmDeleteProduct, setConfirmDeleteProduct] = useState(false);

  const renderProduct = products.map((product, index) => (
    <ProductCard
      key={product.title}
      index={index}
      product={product}
      openEdit={openEdit}
      setProductToEdit={setProductToEdit}
      setProductToEditIndex={setProductToEditIndex}
      openConfirmDelete={openConfirmDelete}
    />
  ));
  const renderColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          return setTempColor(tempColor.filter((c) => c !== color));
        }
        if (productToEdit.colors.includes(color)) {
          return setTempColor(tempColor.filter((c) => c !== color));
        }
        setTempColor([...tempColor, color]);
      }}
    />
  ));
  const renderInputsWithErrorsMsg = (
    id: string,
    name: TproductName,
    label: string,
  ) => {
    return (
      <>
        <label className="text-sm font-medium text-gray-700" htmlFor={id}>
          {label}
        </label>
        <Input
          name={name}
          id={id}
          type={"text"}
          value={productToEdit[name] as string}
          onChange={onChangeEditHandler}
        />

        {errors[name] && <ErrorMessage msg={errors[name]} />}
      </>
    );
  };
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  function openEdit() {
    setIsOpenEdit(true);
  }

  function closeEdit() {
    setIsOpenEdit(false);
  }
  function openConfirmDelete() {
    setConfirmDeleteProduct(true);
  }

  function closeConfirmDelete() {
    setConfirmDeleteProduct(false);
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    console.log(value, name);
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: " " });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: " " });
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = productValidation(product);
    setErrors(errors);
    const hasError = Object.values(errors).some((v) => v !== "");
    if (hasError) {
      return;
    }
    console.log("data sent to DB");
    setProducts([
      ...products,
      { ...product, colors: tempColor, category: selectedCategory },
    ]);
    setProduct(defualtProductObj);
    setTempColor([]);
    close();
  };
  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = productValidation(productToEdit);
    setErrors(errors);

    const hasError = Object.values(errors).some((v) => v !== "");
    if (hasError) {
      console.log(errors);
      return;
    }
    console.log("data sent to DB");

    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempColor.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);
    setProductToEdit(defualtProductObj);
    setTempColor([]);
    closeEdit();
  };
  const onCancel = () => {
    setProduct(defualtProductObj);
    close();
    closeEdit();
    closeConfirmDelete()
  };
  const deleteProduct = () => {
    const updatedProducts = [...products];
    updatedProducts.splice(productToEditIndex, 1);
    setProducts(updatedProducts);
    setProductToEdit(defualtProductObj);
    closeConfirmDelete()
  }
  return (
    <>
      <Button className="bg-indigo-500" width="w-full" onClick={open}>
        ADD NEW Product
      </Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-6">
        {renderProduct}
      </div>
      {/* ADD NEW PRODUCT */}
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
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center mt-2 space-x-3">
            <Button className="bg-indigo-500 ">Submit</Button>
            <Button className="bg-gray-500 " type="button" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* EDIT PRODUCT */}
      <Modal
        title="Edit Product"
        isOpen={isOpenEdit}
        closeModel={close}
      >
        <form onSubmit={submitEditHandler}>
          <div className="flex flex-col space-y-2 mb-2">
            {renderInputsWithErrorsMsg("title", "title", "Product Title")}
            {renderInputsWithErrorsMsg(
              "desceiption",
              "description",
              "Product Description",
            )}
            {renderInputsWithErrorsMsg(
              "imageURL",
              "imageURL",
              "Product imageURL",
            )}
            {renderInputsWithErrorsMsg("price", "price", "Product price")}
          </div>

          <div>
            {tempColor.concat(productToEdit.colors).map((color) => (
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
          <Select
            selected={productToEdit.category}
            setSelected={(value) => {
              setProductToEdit({ ...productToEdit, category: value });
            }}
          />
          <div className="flex items-center mt-2 space-x-3">
            <Button className="bg-indigo-500 ">Edit</Button>
            <Button className="bg-gray-500 " type="button" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* DELETE PRODUCT */}
      <Modal title="Delete Product" isOpen={confirmDeleteProduct} closeModel={closeConfirmDelete}>
        <div className="text-sm text-gray-700 p-2">
          <p>Are You Sure, You want to delete this product</p>
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <Button className="bg-indigo-500" onClick={deleteProduct}>Delete</Button>
          <Button className="bg-gray-500 " type="button" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default App;
