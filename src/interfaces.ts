import type { TproductName } from "./types";

export interface IFormInput {
  id: string;
  name: TproductName;
  label: string;
  type: string;
}

  export interface IProduct {
    title:string,
    description:string,
    imageURL:string,
    price:string,
    colors:string[],
    category:{
      name:string,
      imageURL:string,
    },
  }
  export interface ICategory {
  id?: number;
  name: string;
  imageURL: string;
}