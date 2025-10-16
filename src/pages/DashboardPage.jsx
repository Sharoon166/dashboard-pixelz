import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, TrendingUp, DollarSign, ShoppingCart, Users, CreditCard, MoreHorizontal, Eye, BarChart2, Trash2, RefreshCw, Calendar, ChevronDown, Package2, Users2, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { TotalSalesChart } from '@/components/dashboard/TotalSalesChart';
import { ProductReachHeatmap } from '@/components/dashboard/ProductReachHeatmap';
import OrderInfoChart from '@/components/dashboard/OrderInfoChart';
import NumberSwitcher from '@/components/ui/NumberSwitcher';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: ScrollText,
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
    icon: Users2,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+5.2%',
    trend: 'down',
    icon: Package2,
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
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        className='flex items-center justify-between'
        variants={fadeIn}
      >
        <motion.h1
          className="text-2xl font-semibold tracking-tight"
          variants={slideUp}
        >
          Dashboard
        </motion.h1>
        <motion.div variants={slideUp}>
          <Button variant="outline" className="shadow-none rounded-full border-none">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Jun 27,2025 - Sep 10, 2025</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid gap-4 md:grid-cols-8"
        variants={container}
      >
        <motion.div
          className="grid gap-4 md:col-span-5 md:grid-cols-2"
          variants={container}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.name}
                variants={item}
              >
                <Card className="rounded-3xl hover:shadow-lg transition-shadow gap-2">
                  <CardHeader className="flex items-center justify-between space-y-0">
                    <div className='bg-indigo-100 text-indigo-600 rounded-lg p-2'>
                      <Icon className='size-5' strokeWidth={2} />
                    </div>
                    <CardTitle className="flex items-center justify-between w-full text-sm"> {stat.name}
                    </CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-gray-100"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-48" align="end">
                        <DropdownMenuLabel className="text-sm font-medium leading-none">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">Quick Actions</p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span>View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <BarChart2 className="h-4 w-4 text-muted-foreground" />
                          <span>View Analytics</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <RefreshCw className="h-4 w-4 text-muted-foreground" />
                          <span>Refresh</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="px-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-3xl font-medium">{stat.value}</div>
                      <Badge className={cn("font-semibold", {
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
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className='md:col-span-3 *:h-full'
          variants={slideUp}
        >
          <OrderInfoChart />
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-9"
        variants={container}
      >
        <motion.div
          className='md:col-span-5'
          variants={slideUp}
        >
          <TotalSalesChart />
        </motion.div>
        <motion.div
          className='md:col-span-4'
          variants={slideUp}
        >
          <ProductReachHeatmap />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
