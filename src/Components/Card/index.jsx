import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function Card(data) {
  const {
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
  } = useContext(ShoppingCartContext)

  const showProduct = productDetail => {
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductsCart = (e, productData) => {
    e.stopPropagation()
    setCartProducts([...cartProducts, productData])
    openCheckoutSideMenu()
    closeProductDetail()
  }

  const renderIcon = id => {
    const isInCart =
      cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div className='flex justify-center items-center absolute top-0 right-0 w-6 h-6 m-2 p-1 rounded-full bg-green-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-white'
            onClick={event => addProductsCart(event, data?.data)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
        </div>
      )
    } else {
      return (
        <div className='flex justify-center items-center absolute top-0 right-0 w-6 h-6 m-2 p-1 rounded-full bg-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
            onClick={event => addProductsCart(event, data?.data)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </div>
      )
    }
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data?.data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-white/60 text-black text-xs rounded-lg'>
          {data?.data?.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data?.data?.images?.[0]}
          alt={data?.data?.description}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data?.data?.title}</span>
        <span className='text-lg font-medium'>${data?.data?.price}</span>
      </p>
    </div>
  )
}

export { Card }
