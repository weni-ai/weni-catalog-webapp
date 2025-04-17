export interface ProductItem{
    title: string,
    image: string,
    discount?: number,
    owner: string,
    oldValue?: number,
    value: number,
    seller: string,
    id: string | number,
}

export interface CartItem{
    id: string | number,
    price: number,
    qtd: number
}