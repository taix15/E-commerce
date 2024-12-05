import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MainContent = () => {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Ventas" value="$1,234" />
        <DashboardCard title="Pedidos" value="56" />
        <DashboardCard title="Clientes" value="289" />
        <DashboardCard title="Productos" value="120" />
      </div>
    </div>
  )
}

const DashboardCard = ({ title, value }: { title: string; value: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
)

export default MainContent

