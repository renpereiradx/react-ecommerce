import { MainLayout } from '../../Components/MainLayout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)
  // const renderView = () => {
  //   const itemsToRender =
  //     context.searchByTitle?.length > 0 ? context.filteredItems : context.items
  //   itemsToRender?.length > 0 ? (
  //     itemsToRender.map(item => <Card key={item.id} data={item} />)
  //   ) : (
  //     <h1>We don't have anything :(</h1>
  //   )
  // }

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      } else {
        return <div>We don't have anything :(</div>
      }
    } else {
      return context.items?.map(item => <Card key={item.id} data={item} />)
    }
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
