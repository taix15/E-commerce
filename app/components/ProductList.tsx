'use client'

import { useState } from 'react'
import { Product } from '../types'
import { useCart } from '../Context/CartContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products: Product[] = [
  { id: 1, name: "Camiseta", price: 19.99, image: "/camiseta.jpg" },
  { id: 2, name: "Pantalón", price: 39.99, image: "/pantalon.jpg" },
  { id: 3, name: "Zapatos", price: 59.99, image: "/zapatos.JPG" },
  { id: 4, name: "Gorra", price: 14.99, image: "/gorra.JPG" },
]

const ProductList = () => {
  const { addToCart, getItemQuantity } = useCart()
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: number]: number }>({})

  const handleQuantityChange = (productId: number, quantity: number) => {
    setSelectedQuantities(prev => ({ ...prev, [productId]: quantity }))
  }

  const handleAddToCart = (product: Product) => {
    const quantity = selectedQuantities[product.id] || 1
    addToCart(product, quantity)
    setSelectedQuantities(prev => ({ ...prev, [product.id]: 0 }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-2xl font-bold">{product.price.toFixed(2)} €</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
         
            <Select
              value={(selectedQuantities[product.id] || 0).toString()}
              onValueChange={(value) => handleQuantityChange(product.id, parseInt(value))}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Cantidad" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5].map((quantity) => (
                  <SelectItem key={quantity} value={quantity.toString()}>
                    {quantity === 0 ? 'Cantidad' : quantity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            
            <Button onClick={() => handleAddToCart(product)} className="ml-4">
              {getItemQuantity(product.id) > 0 ? 'Actualizar carrito' : 'Añadir al carrito'}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ProductList
