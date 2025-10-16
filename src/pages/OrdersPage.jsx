import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table as TableIcon, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

const orders = [
  {
    id: 'ORD-2025-1001',
    customer: 'Alex Johnson',
    date: '2025-10-16',
    status: 'processing',
    amount: '$349.99',
    items: 2
  },
  {
    id: 'ORD-2025-1002',
    customer: 'Sarah Williams',
    date: '2025-10-15',
    status: 'shipped',
    amount: '$129.99',
    items: 1
  },
  {
    id: 'ORD-2025-1003',
    customer: 'Michael Chen',
    date: '2025-10-15',
    status: 'completed',
    amount: '$599.50',
    items: 3
  },
  {
    id: 'ORD-2025-1004',
    customer: 'Emma Davis',
    date: '2025-10-14',
    status: 'pending',
    amount: '$89.99',
    items: 1
  },
  {
    id: 'ORD-2025-1005',
    customer: 'David Kim',
    date: '2025-10-14',
    status: 'completed',
    amount: '$229.75',
    items: 2
  },
  {
    id: 'ORD-2025-1006',
    customer: 'Olivia Martinez',
    date: '2025-10-13',
    status: 'shipped',
    amount: '$179.99',
    items: 1
  },
  {
    id: 'ORD-2025-1007',
    customer: 'James Wilson',
    date: '2025-10-13',
    status: 'completed',
    amount: '$429.99',
    items: 4
  },
  {
    id: 'ORD-2025-1008',
    customer: 'Sophia Brown',
    date: '2025-10-12',
    status: 'completed',
    amount: '$299.99',
    items: 2
  },
  {
    id: 'ORD-2025-1009',
    customer: 'William Taylor',
    date: '2025-10-12',
    status: 'processing',
    amount: '$159.99',
    items: 1
  },
  {
    id: 'ORD-2025-1010',
    customer: 'Ava Anderson',
    date: '2025-10-11',
    status: 'shipped',
    amount: '$199.99',
    items: 2
  }
];

const getStatusVariant = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-purple-100 text-purple-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const OrderCard = ({ order }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{order.id}</h3>
          <p className="text-sm text-muted-foreground">{order.customer}</p>
        </div>
        <Badge className={getStatusVariant(order.status)}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground">Date</p>
          <p>{new Date(order.date).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Items</p>
          <p>{order.items} {order.items === 1 ? 'item' : 'items'}</p>
        </div>
        <div className="col-span-2">
          <p className="text-muted-foreground">Amount</p>
          <p className="font-medium">{order.amount}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function OrdersPage() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>
          <p className="text-sm text-muted-foreground">View and manage your orders</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center justify-center rounded-md bg-muted p-1">
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className={cn("h-8 px-2",{
                "bg-indigo-500 hover:bg-indigo-500": viewMode === 'table',
              })}
            >
              <TableIcon className="h-4 w-4 mr-2" />
              <span className="sr-only md:not-sr-only">Table</span>
            </Button>
            <Button
              variant={viewMode === 'card' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('card')}
              className={cn("h-8 px-2",{
                "bg-indigo-500 hover:bg-indigo-500": viewMode === 'card',
              })}
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              <span className="sr-only md:not-sr-only">Cards</span>
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className={cn("!px-8",viewMode === 'card' ? 'pt-6' : 'p-0')}>
          {viewMode === 'table' ? (
            <Table className="max-w-full">
              <TableHeader>
                <TableRow className="*:font-semibold">
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge className={getStatusVariant(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}