import Header from '../../templates/Header'
import Hero from '../../molecules/Hero'
import Filters from '../../molecules/Filters'
import Products from '../../templates/Products'
import Informations from '../../templates/Informations'
import Brands from '../../templates/Brands'
import Newsletter from '../../templates/Newsletter'
import Footer from '../../templates/Footer'

function Home() {
    return (
        <>
            {/* <Header />
            <Hero />
            <Filters />
            <Products hasCategories={true} />
            <Informations />
            <Products hasCategories={false} />
            <Brands />
            <Products hasCategories={false} /> */}
            <Newsletter />
            {/* <Footer /> */}
        </>
    )
}

export default Home