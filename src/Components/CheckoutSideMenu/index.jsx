import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../Utils'

function CheckoutSideMenu() {
  const {
    setCount,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShoppingCartContext)

  const handleDelete = id => {
    const filteredProducts = cartProducts.filter(product => product.id != id)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '7.12.23',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount()
    closeCheckoutSideMenu()
  }

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col fixed top-[68px] right-1 w-[360px] h-[calc(100vh-80px)] border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => closeCheckoutSideMenu()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='flex-1 px-6 overflow-y-scroll'>
        {cartProducts?.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imgUrl={product.images?.[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='mb-6 px-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className='bg-black py-3 text-white w-full rounded-lg'
            onClick={() => handleCheckout()}
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
