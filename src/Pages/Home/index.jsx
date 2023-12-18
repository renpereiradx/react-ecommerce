import { MainLayout } from '../../Components/MainLayout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    return context.filteredItems?.length > 0 ? (
      context.filteredItems?.map(item => <Card key={item.id} data={item} />)
    ) : (
      <h2>We don't have anything !</h2>
    )
  }

  return (
    <MainLayout>
      <h1 className='font-medium text-xl mb-4'>Home</h1>
      <input
        type='text'
        placeholder='Search a product'
        className='w-80 mb-4 h-7 border border-black rounded-lg focus:outline-none'
        onChange={event => context.setSearchByTitle(event.target.value)}
      />
      <section className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {renderView()}
      </section>
      <ProductDetail />
    </MainLayout>
  )
}

export { Home }
