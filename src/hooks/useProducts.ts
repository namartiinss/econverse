import { useEffect, useState } from 'react'

interface Product {
    productName: string
    descriptionShort: string
    photo: string
    price: number
}
const BASE_URL = import.meta.env.PROD
  ? 'https://app.econverse.com.br'
  : '/api'

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch(`${BASE_URL}/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return { products }
}