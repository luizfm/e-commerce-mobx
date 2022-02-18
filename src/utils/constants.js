import ShoppingIcon from '_assets/icons/shopping-icon.svg'
import AccountIcon from '_assets/icons/account-icon.svg'
import HomeIcon from '_assets/icons/home-icon.svg'
import SearchIcon from '_assets/icons/search-icon.svg'
import MenuIcon from '_assets/icons/menu-icon.svg'
import SofaIcon from '_assets/icons/sofa-icon.svg'
import GameIcon from '_assets/icons/game-icon.svg'
import ClothesIcon from '_assets/icons/clothes-icon.svg'
import ElectronicsIcon from '_assets/icons/electronics-icon.svg'
import BooksIcon from '_assets/icons/books-icon.svg'
import WatchIcon from '_assets/icons/watch-icon.svg'

export const PRODUCTS_CATEGORIES = {
  FURNITURE: 'furniture',
  GAMES: 'games',
  BOOKS: 'books',
  ELECTRONICS: 'electronics',
  CLOTHES: 'clothes',
  ACCESSORIES: 'accessories',
}

export const ICONS_NAMES = {
  MENU: 'Menu',
  CART: 'Cart',
  ACCOUNT: 'Account',
  HOME: 'Home',
  SEARCH: 'Search',
  FURNITURE: 'Furniture',
  GAMES: 'Games',
  BOOKS: 'Books',
  ELECTRONICS: 'Electronics',
  CLOTHES: 'Clothes',
  ACCESSORIES: 'Accessories',
}

export const MENU_ICON = {
  name: ICONS_NAMES.MENU,
  icon: MenuIcon,
}

export const SHOPPING_ICON = {
  name: ICONS_NAMES.CART,
  icon: ShoppingIcon,
  to: '/my-cart',
}

export const ACCOUNT_ICON = {
  name: ICONS_NAMES.ACCOUNT,
  icon: AccountIcon,
}

export const HOME_ICON = {
  name: ICONS_NAMES.HOME,
  icon: HomeIcon,
  to: '/dashboard',
}

export const SEARCH_ICON = {
  name: ICONS_NAMES.SEARCH,
  icon: SearchIcon,
}

export const FURNITURE = {
  name: ICONS_NAMES.FURNITURE,
  icon: SofaIcon,
  to: '/furniture',
}

export const GAMES = {
  name: ICONS_NAMES.GAMES,
  icon: GameIcon,
  to: '/games',
}

export const CLOTHES = {
  name: ICONS_NAMES.CLOTHES,
  icon: ClothesIcon,
  to: '/clothes',
}

export const ELECTRONICS = {
  name: ICONS_NAMES.ELECTRONICS,
  icon: ElectronicsIcon,
  to: '/electronics',
}

export const BOOKS = {
  name: ICONS_NAMES.BOOKS,
  icon: BooksIcon,
  to: '/books',
}

export const ACCESSORIES = {
  name: ICONS_NAMES.ACCESSORIES,
  icon: WatchIcon,
  to: '/accessories',
}

export const SIDEBAR_ITEMS = [
  FURNITURE,
  GAMES,
  CLOTHES,
  ELECTRONICS,
  BOOKS,
  ACCESSORIES,
]
