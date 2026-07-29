export interface IFormInput {
  id: string;
  name: string;
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