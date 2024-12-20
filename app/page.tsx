import ProductList from './_components/ProductList'
import Cart from './_components/Cart'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Mi Tienda de Productos</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductList />
        <Cart />
      </div>
    </main>
  )
}

