import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Eye, BarChart2, RefreshCw } from 'lucide-react';
import { Button } from "../ui/button";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="h-full">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
          className="h-full"
        >
          <Card className="shadow-sm border border-gray-100 rounded-3xl h-full">
            <motion.div variants={item}>
              <CardHeader>
                <CardTitle className="font-medium text-lg inline-flex items-center justify-between">
                  Total Sales
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
            </motion.div>
            <motion.div variants={item}>
              <CardContent className="h-52">
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
                    <defs>
                      <pattern
                        id="indigoPattern"
                        patternUnits="userSpaceOnUse"
                        width="8"
                        height="8"
                        patternTransform="rotate(45)"
                      >
                        <rect width="8" height="8" fill="#4a64dd2f" />
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
                      animationBegin={isVisible ? 300 : 0}
                      animationDuration={1000}
                      animationEasing="ease-out"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </motion.div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}