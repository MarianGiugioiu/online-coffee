export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
  }
  
  export interface CartList {
     CartListName: string
     CartItems: CartItem[]
  }
  
  export interface User {
     firstName: string
     lastName: string
     email: string
     role: string
     token: string
  }