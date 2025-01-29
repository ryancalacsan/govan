export interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
  new: boolean
  hostId: string
}

export interface LoginFormData {
  email: string
  password: string
}
