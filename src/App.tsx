import RelatedItems from "./components/atoms/RelatedItems"
import Filters from "./components/molecules/Filters"
import Hero from "./components/molecules/Hero"
import Header from "./components/templates/Header"
import RelatedProducts from "./components/templates/RelatedProducts"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Filters />
      <RelatedProducts />
    </>
  )
}
export default App