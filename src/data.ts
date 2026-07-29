import type { IFormInput } from "./interfaces";
import type { IProduct } from "./interfaces";

export const formInputsList:IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URl",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#1F8A70",

];


export const productsList: IProduct[] = [
  {
    title: "Kia Cerato 2017",
    description: "A reliable sedan with excellent fuel economy and a modern interior.",
    imageURL:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    price: "18500",
    colors: ["#000000", "#2563eb", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
  },
  {
    title: "iPhone 15 Pro",
    description: "Apple's latest flagship smartphone with A17 Pro chip and titanium design.",
    imageURL:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    price: "999",
    colors: ["#A31ACB", "#000000", "#FFF6E3"],
    category: {
      name: "Mobiles",
      imageURL:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
  {
    title: "Gaming Laptop",
    description: "High-performance laptop with RTX graphics card for gaming and development.",
    imageURL:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    price: "1450",
    colors: ["#3C2A21", "#645CBB", "#84D2C5"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
  },
  {
    title: "Running Shoes",
    description: "Lightweight running shoes designed for maximum comfort and performance.",
    imageURL:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    price: "120",
    colors: ["#FF0032", "#1F8A70", "#820000"],
    category: {
      name: "Fashion",
      imageURL:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
  },
];