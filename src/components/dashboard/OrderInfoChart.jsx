import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell } from 'recharts';
import { MoreHorizontal, MoreVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from "../ui/button";
import { Eye, BarChart2, RefreshCw } from 'lucide-react';

export default function OrderInfoChart() {
  const data = [
    { name: 'Return', value: 10, color: '#EF4444' },
    { name: 'Shipped', value: 20, color: '#EAB308' },
    { name: 'Delivered', value: 70, color: '#4F46E5' },
  ];

  const totalOrders = 5430;

  const chartConfig = {
    delivered: {
      label: "Delivered",
      color: "#4F46E5",
    },
    shipped: {
      label: "Shipped",
      color: "#EAB308",
    },
    return: {
      label: "Return",
      color: "#EF4444",
    },
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-medium text-lg inline-flex items-center justify-between w-full">Total Sales
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
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center ">
        <div className="relative w-full max-w-[180px] aspect-square">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={90}
                startAngle={90}
                endAngle={450}
                dataKey="value"
                strokeWidth={0}
                paddingAngle={6}
                cornerRadius={12}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-semibold text-gray-900">
              {totalOrders.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Total Order</div>
            <div className="text-sm text-muted-foreground">on this weeks</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#EAB308]"/>
            <span className="text-sm text-gray-600">Shipped</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#4F46E5]"/>
            <span className="text-sm text-gray-600">Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#EF4444]"/>
            <span className="text-sm text-gray-600">Return</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}