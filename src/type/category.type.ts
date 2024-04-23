export type CategoryType = {
  id: number
  name: string
  image: string
}

export type ProductType = {
  id: string
  delivery: string
  title: string
  description: string
  price: number
  image: string
  kurlyOnly: boolean
}

export type CartType = {
  product: ProductType
  quantity: number
  checked: boolean
}
