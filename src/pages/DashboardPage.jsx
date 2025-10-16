import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, TrendingUp, DollarSign, ShoppingCart, Users, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-green-100 text-green-600'
  },
  {
    name: 'Total Sales',
    value: '1,234',
    change: '-12%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    name: 'Active Users',
    value: '1,234',
    change: '+19%',
    trend: 'up',
    icon: Users,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+5.2%',
    trend: 'down',
    icon: CreditCard,
    color: 'bg-orange-100 text-orange-600'
  },
];

const transactions = [
  {
    id: 1,
    customer: 'Olivia Martin',
    email: 'olivia@example.com',
    amount: '$1,999.00',
    status: 'completed',
    date: '2023-01-15',
  },
  {
    id: 2,
    customer: 'Jackson Lee',
    email: 'jackson@example.com',
    amount: '$39.00',
    status: 'processing',
    date: '2023-01-14',
  },
  {
    id: 3,
    customer: 'Isabella Nguyen',
    email: 'isabella@example.com',
    amount: '$299.00',
    status: 'completed',
    date: '2023-01-13',
  },
  {
    id: 4,
    customer: 'William Kim',
    email: 'will@example.com',
    amount: '$99.00',
    status: 'failed',
    date: '2023-01-12',
  },
  {
    id: 5,
    customer: 'Sofia Davis',
    email: 'sofia@example.com',
    amount: '$39.00',
    status: 'completed',
    date: '2023-01-11',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name} className="hover:shadow-md transition-shadow rounded-3xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="flex items-center gap-2">
                  <div className='bg-indigo-100 text-indigo-600 rounded-lg p-2'>
                    <Icon className='size-7' strokeWidth={2} />
                  </div>
                  <span className='font-semibold'>
                    {stat.name}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-medium">{stat.value}</div>
                  <Badge className={cn("font-semibold",{
                    "bg-green-100 text-green-500": stat.trend == "up",
                    "bg-red-100 text-red-500": stat.trend == "down"
                  })}>
                    {stat.trend === 'up' ? (
                      <ArrowUp />
                    ) : (
                      <ArrowDown />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <div className='text-muted-foreground text-sm'>
                  From last week
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">Sales Overview</CardTitle>
              <Button variant="outline" size="sm" className="h-8">
                Last 7 days
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
              <div className="text-center p-6">
                <TrendingUp className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                <h3 className="text-lg font-medium text-gray-700">Sales Chart</h3>
                <p className="text-sm text-gray-500 mt-1">$12,234.00 total sales this period</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      <div className="font-medium">{transaction.customer}</div>
                      <div className="text-sm text-muted-foreground">{transaction.email}</div>
                    </TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : transaction.status === 'processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                        }`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
