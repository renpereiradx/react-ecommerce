import { useContext } from 'react'
import { MainLayout } from '../../Components/MainLayout'
import { OrderCard } from '../../Components/OrderCard'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = order?.length - 1

  return (
    <MainLayout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders'>
          <button>
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
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {order?.[index].products?.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imgUrl={product.images?.[0]}
            price={product.price}
          />
        ))}
      </div>
    </MainLayout>
  )
}
export { MyOrder }
