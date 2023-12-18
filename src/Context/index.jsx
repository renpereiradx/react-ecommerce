import { createContext, useEffect, useState } from 'react'
import { urlAPI } from '../API'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider({ children }) {
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
  // Get Products By Category
  const [searchByCategory, setSearchByCategory] = useState(null)
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

  // Filtered By Title
  const filteredItemsByTitle = (items, searchByTitle) =>
    items?.filter(item =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  // Filtered By Category
  const filteredItemsByCategory = (items, searchByCategory) =>
    items?.filter(item =>
      item.category.name.toLowerCase().includes(searchByCategory)
    )
  // Filtered By Title And Category
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    switch (searchType) {
      case 'title':
        return filteredItemsByTitle(items, searchByTitle)
      case 'category':
        return filteredItemsByCategory(items, searchByCategory)
      case 'titleAndCategory':
        return filteredItemsByCategory(items, searchByCategory).filter(item =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
      default:
        return items
    }
  }

  // Handle Filtered Items
  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy('titleAndCategory', items, searchByTitle, searchByCategory)
      )
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy('title', items, searchByTitle, searchByCategory)
      )
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy('category', items, searchByTitle, searchByCategory)
      )
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    return () => {
      setSearchByTitle(null)
      setSearchByCategory(null)
    }
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider
      value={{
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
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider }
