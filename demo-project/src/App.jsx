import Cards from "./Component/product-cards/Cards1"
import Cards2 from "./Component/product-cards/Cards2"
import Cards3 from "./Component/product-cards/Cards3"
import Card1 from "./Component/seller-cards/Card1"
import Card2 from "./Component/seller-cards/Card2"
import Card3 from "./Component/seller-cards/Card3"
function App() {

  return (
    <>
    <h2> Enter the product details : </h2>
  <Cards />
  <Cards2 />
  <Cards3 />
    <h2> Enter the seller details : </h2>
  <Card1 />
  <Card2 />
  <Card3 />
  
    </>
  )
}

export default App
