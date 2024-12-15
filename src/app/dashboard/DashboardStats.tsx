import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/lib/prisma";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";


async function getData() {
    const [user, products, order] = await Promise.all([
         client.user.findMany({
            select: {
                id: true
            }
        }),

         client.product.findMany({
            select: {
                id: true
            }
        }),

         client.order.findMany({
            select: {
                amount: true
            }
        })

    ])

    // const user = await client.user.findMany({
    //     select: {
    //         id: true
    //     }
    // })

    // const products = await client.product.findMany({
    //     select: {
    //         id: true
    //     }
    // })

    // const order = await client.order.findMany({
    //     select: {
    //         amount: true
    //     }
    // })

    return {
        user,
        products,
        order
    }
}


export async function DashboardStats() {
    const {user, products, order} = await getData()

    const totalAmount = order.reduce((acc, curr) =>{
        return acc + curr.amount
    },0)

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${new Intl.NumberFormat('en-US').format(totalAmount / 100)}</p>
          <p className="text-sm text-muted-foreground">Based on 100 Charges</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
          <ShoppingBag className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+{order.length}</p>
          <p className="text-sm text-muted-foreground">
            Total Sales on ShopKhadija
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Products</CardTitle>
          <PartyPopper className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{products.length}</p>
          <p className="text-sm text-muted-foreground">
            Total Products created
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Users</CardTitle>
          <User2 className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{user.length}</p>
          <p className="text-sm text-muted-foreground">Total Users Signed Up</p>
        </CardContent>
      </Card>
    </div>
  );
}