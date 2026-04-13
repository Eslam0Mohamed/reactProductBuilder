import Image from "./Image"

interface IProps{

}
const ProductCard = ({}:IProps) => {
  return (
    <div className="p-3 border border-gray-400 rounded-2xl">
<Image imageURL="https://images.pexels.com/photos/34106025/pexels-photo-34106025.jpeg"
alt="product name"
className="rounded-2xl h-64 w-full object-cover"/>
<h3>kia cerato 2017mm</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat provident nulla autem magnam nostrum ad.
   Nemo, dignissimos!</p>
   <div className="flex space-x-2 p-1">
    <span className="w-5 h-5 bg-indigo-500 rounded-full"></span>
    <span className="w-5 h-5 bg-indigo-900 rounded-full"></span>
    <span className="w-5 h-5 bg-indigo-200 rounded-full"></span>
   </div>
   <div className="flex justify-between items-center">
    <span className="text-xl font-bold ">$500.000</span>
<Image imageURL="https://images.pexels.com/photos/34106025/pexels-photo-34106025.jpeg"
alt="product name"
className="w-10 h-10 rounded-full"/>
   </div>
   <div className="flex items-center gap-3 my-4">
<button className="bg-indigo-700 w-full text-white px-2 py-2 rounded-md cursor-pointer">Edit</button>
<button className="bg-red-700 w-full text-white px-2 py-2 rounded-md cursor-pointer">Delete</button>
   </div>
    </div>
  )
}

export default ProductCard 