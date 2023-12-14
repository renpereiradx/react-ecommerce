import { createContext, useEffect, useState } from 'react'
import { urlAPI } from '../API'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider({ children }) {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)
  // Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)
  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({})
  // Shopping Cart - Add product to cart
  const [cartProducts, setCartProducts] = useState([])
  // Shopping Cart - Order
  const [order, setOrder] = useState([])
  // Get Products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  // Get Products By Title
  const [searchByTitle, setSearchByTitle] = useState(null)
  // Get Products from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${urlAPI}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log(`Rayos, ha ocurrido un error: ${error}`)
      }
    }
    fetchItems()
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) =>
    items?.filter(item =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider }
