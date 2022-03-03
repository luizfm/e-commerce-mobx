import { makeAutoObservable } from 'mobx'

class CartStore {
  cart = []
  rootStore

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  addProductToCart(product) {
    if (product.stock < product.quantity || product.quantity <= 0) {
      return
    }

    const productInCart = this.cart.find((prod) => prod.id === product.id)

    if (!productInCart) {
      this.cart.push(product)
      return
    }

    productInCart.quantity += product?.quantity

    this.cart.reduce(
      (acc, current) =>
        current.id === productInCart.id ? [...acc, productInCart] : acc,
      []
    )
  }

  updateCartProductQuantity(product, quantity) {
    const productExists = this.cart.find((prod) => prod.id === product.id)

    if (!productExists) {
      return
    }

    productExists.quantity = quantity

    this.cart.reduce(
      (acc, current) =>
        current.id === productExists.id ? [...acc, productExists] : acc,
      []
    )
  }

  cartTotal() {
    return this.cart.reduce((acc, current) => {
      let total = 0
      total += acc + current.quantity * current.price
      return total
    }, 0)
  }

  clearCart() {
    this.cart = []
  }
}

export default CartStore
