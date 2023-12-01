import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../Utils'

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
  } = useContext(ShoppingCartContext)

  const handleDelete = id => {
    const filteredProducts = cartProducts.filter(product => product.id != id)
    setCartProducts(filteredProducts)
  }

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col fixed top-[68px] right-1 w-[360px] h-[calc(100vh-80px)] overflow-y-scroll border border-black rounded-lg bg-white`}
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
      <div className='px-6'>
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
      <div className='fixed bottom-0 px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
