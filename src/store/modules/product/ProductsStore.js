import { makeAutoObservable } from 'mobx'

class ProductsStore {
  products = []
  rootStore

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  updateProductsList(list) {
    const formattedList = list.reduce((acc, current) => {
      if (this.products.some((item) => item.id === current.id)) {
        return acc
      }

      return [...acc, current]
    }, [])

    this.products = [...this.products, ...formattedList]
  }
  currentCategoryList(category) {
    return this.products.filter((item) => item.category === category)
  }
}

export default ProductsStore
