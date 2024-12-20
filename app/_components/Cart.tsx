'use client'

import { useCart } from '../Context/CartContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const Cart = () => {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Card className="w-full md:w-80">
      <CardHeader>
        <CardTitle>Carrito de Compras</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            {cart.map((item, index) => (
              <div key={item.id}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x €{item.price.toFixed(2)}
                    </p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </Button>
                </div>
                {index < cart.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </ScrollArea>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <strong>Total:</strong>
        <span>€{total.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}

export default Cart

