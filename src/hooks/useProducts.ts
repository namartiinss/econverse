import { useEffect, useState } from 'react'

interface Product {
    productName: string
    descriptionShort: string
    photo: string
    price: number
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return { products }
}