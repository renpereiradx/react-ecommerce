import { useContext } from 'react'
import { MainLayout } from '../../Components/MainLayout'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { OrdersCard } from '../../Components/OrdersCard'

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)

  return (
    <MainLayout>
      My Orders
      {order?.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </MainLayout>
  )
}
export { MyOrders }
