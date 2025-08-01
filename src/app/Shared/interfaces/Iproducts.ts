export interface Iproducts {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  cartCount?: number
}

export interface Rating {
  rate: number
  count: number
}
