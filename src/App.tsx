import ProductCard from "./components/ProductCard"

interface IProps{

}
const App = ({}:IProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-6">
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
    </div>
  )
}

export default App 

