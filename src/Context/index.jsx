import { createContext, useState } from 'react'

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider }
