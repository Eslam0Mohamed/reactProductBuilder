import type { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEdit: () => void;
  index: number;
  setProductToEditIndex: (index: number) => void;
  openConfirmDelete:()=>void
}
const ProductCard = ({ product, setProductToEdit, openEdit, index, setProductToEditIndex, openConfirmDelete }: IProps) => {
  const renderColors = product.colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  const onEdit = () => {
    setProductToEdit(product);
    openEdit();
    setProductToEditIndex(index)
  };
  const onRemove = () => {
    setProductToEdit(product);
    openConfirmDelete()
    setProductToEditIndex(index)
  };

  return (
    <div className="p-3 border border-gray-400 rounded-2xl sm:max-w-sm md:max-w-lg">
      <Image
        imageURL={product.imageURL}
        alt={product.title}
        className="rounded-2xl h-64 w-full object-cover"
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="flex space-x-2 p-1">{renderColors}</div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold ">{product.price}</span>
        <Image
          imageURL={product.imageURL}
          alt={product.title}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex items-center gap-3 my-3">
        <Button className="bg-indigo-700" onClick={onEdit}>
          Edit
        </Button>
        <Button className="bg-red-700" onClick={onRemove}>Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
