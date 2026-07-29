export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  if (!product.title.trim() || product.title.length > 10 || product.title.length < 3) {
    errors.title = "Title must be between 3 and 10 characters";
  }
  if (!product.description.trim() || product.description.length > 100 || product.description.length < 10) {
    errors.description = "Description must be between 10 and 100 characters";
  }
  if (product.imageURL.trim() === "") {
    errors.imageURL = "Image URL is required";
  }
  if (product.price.trim() === "" || isNaN(Number(product.price))) {
    errors.price = "Price is required and must be a valid number";
  }
  return errors;
};
