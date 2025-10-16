import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, BarChart2, RefreshCw } from 'lucide-react';
import { Button } from "../ui/button";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Fragment, useRef, useState, useEffect } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const reachData = {
  Tokopedia: [50000, 10000, 8000, 7000, 600, 0, 0],
  Shopee: [5000, 4000, 6000, 8000, 10000, 0, 0],
  Lazada: [7000, 9000, 50000, 1000, 8000, 0, 0],
  Blibli: [1000, 50000, 5000, 10000, 9000, 0, 0],
  TikTok: [50000, 8000, 10000, 15000, 12000, 0, 0],
};

function getCellColor(val) {
  if (val === 0) return "bg-gray-100";
  if (val >= 50000) return "bg-indigo-800";
  if (val >= 10000) return "bg-indigo-600";
  if (val >= 5000) return "bg-indigo-400";
  return "bg-indigo-200";
}

export function ProductReachHeatmap() {
  const platforms = Object.keys(reachData);
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  const legendItem = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.5 + (i * 0.1),
        duration: 0.3
      }
    })
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
          <Card className="shadow-sm border border-gray-100 rounded-3xl h-full overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="font-medium text-lg">Product Reach</CardTitle>
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
            <CardContent>
              <motion.div 
                className="grid gap-3 p-2" 
                style={{ gridTemplateColumns: '100px repeat(7, 1fr)' }}
              >
                {/* Day headers */}
                <div key="empty-corner"></div>
                {days.map((day) => (
                  <motion.div 
                    key={day} 
                    className="text-center text-xs text-gray-500 font-normal pb-1"
                    variants={item}
                  >
                    {day}
                  </motion.div>
                ))}

                {/* Platform rows */}
                {platforms.map((platform) => (
                  <Fragment key={platform}>
                    <motion.div 
                      className="text-sm text-gray-700 font-normal flex items-center"
                      variants={item}
                    >
                      {platform}
                    </motion.div>
                    {reachData[platform].map((value, colIndex) => (
                      <motion.div
                        key={`${platform}-${colIndex}`}
                        className={`w-8 h-8 rounded-lg ${getCellColor(value)} hover:opacity-80 cursor-pointer`}
                        title={`${platform} - ${days[colIndex]}: ${value.toLocaleString()} reach`}
                        variants={item}
                        whileHover="hover"
                      />
                    ))}
                  </Fragment>
                ))}
              </motion.div>

              <motion.div 
                className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-600"
                variants={container}
              >
                {[
                  { color: "bg-indigo-200", label: "0–5k" },
                  { color: "bg-indigo-400", label: "5k–10k" },
                  { color: "bg-indigo-600", label: "10k–50k" },
                  { color: "bg-indigo-800", label: ">50k" }
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    variants={legendItem}
                    custom={i}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-3 h-3 rounded ${item.color}`}></div>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}