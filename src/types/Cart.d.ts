export interface ProductItem{
    title: string,
    description: string,
    image: string,
    discount?: number,
    owner: string,
    oldValue?: number,
    value: number,
    seller: string,
    id: string | number,
    images: {
        src: string,
        alt: string
    }[]
    availableQuantity?: number,
    category?: string,
}

export interface CartItem{
    item: ProductItem,
    qtd: number,
}