import { useEffect, useState } from 'react'
import { MainLayout } from '../../Components/MainLayout'
import { Card } from '../../Components/Card'
import { urlAPI } from '../../API'

function Home() {
  const [items, setItems] = useState(null)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${urlAPI}/products`)
        const data = await response.json()
        console.log(data[0].title)
        setItems(data)
      } catch (error) {
        console.log(`Rayos, ha ocurrido un error: ${error}`)
      }
    }
    fetchItems()
  }, [])

  return (
    <MainLayout>
      Home
      <section>
        {items?.map(item => (
          <Card key={item.id} data={item} />
        ))}
        <Card />
      </section>
    </MainLayout>
  )
}

export { Home }
