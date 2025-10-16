import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Eye, BarChart2, RefreshCw } from 'lucide-react';
import { Button } from "../ui/button";


const salesData = [
  { day: "Mon", sales: 21000 },
  { day: "Tue", sales: 12000 },
  { day: "Wed", sales: 16000 },
  { day: "Thu", sales: 18000 },
  { day: "Fri", sales: 21000 },
  { day: "Sat", sales: 24000 },
  { day: "Sun", sales: 20000 },
];

export function TotalSalesChart() {
  return (
    <Card className="shadow-sm border border-gray-100 rounded-3xl h-full">
      <CardHeader>
        <CardTitle className="font-medium text-lg inline-flex items-center justify-between">Total Sales
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
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={salesData}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-100">
                      <p className="font-medium">
                        {label} -
                        <span className="text-indigo-600">
                          ${payload[0].value.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
              cursor={false}
            />
            {/* 🎨 Define Two-Tone Diagonal Pattern */}
            <defs>
              <pattern
                id="indigoPattern"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                {/* Light indigo base */}
                <rect width="8" height="8" fill="#4a64dd2f" />
                {/* Subtle gray diagonal line */}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  stroke="#9997"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </pattern>
            </defs>

            <Bar
              dataKey="sales"
              fill="url(#indigoPattern)"
              radius={[12, 12, 12, 12]}
              activeBar={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}