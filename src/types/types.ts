export interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
  seats: number
  new: boolean
  hostId: string
}

export interface User {
  id: string
  email: string
  password: string
  name: string
  income: number[]
}
export interface LoginFormData {
  email: string
  password: string
}
