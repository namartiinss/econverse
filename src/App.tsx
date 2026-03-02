import Filters from "./components/molecules/Filters"
import Hero from "./components/molecules/Hero"
import Brands from "./components/templates/Brands"
import Header from "./components/templates/Header"
import Informations from "./components/templates/Informations"
import Newsletter from "./components/templates/Newsletter"
import Products from "./components/templates/Products"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Filters />
      <Products />
      <Informations />
      <Brands />
      <Products />
      <Newsletter />
    </>
  )
}
export default App