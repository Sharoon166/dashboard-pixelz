import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, BarChart2, RefreshCw } from 'lucide-react';
import { Button } from "../ui/button";
import { Fragment } from "react";

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

  return (
    <Card className="shadow-sm border border-gray-100 rounded-3xl h-full">
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
        {/* Grid container */}
        <div className="grid gap-3" style={{ gridTemplateColumns: '100px repeat(7, 1fr)' }}>
          {/* Platform rows */}
          {platforms.map((platform) => (
            <Fragment key={platform}>
              <div className="text-sm text-gray-700 font-normal flex items-center">
                {platform}
              </div>
              {reachData[platform].map((value, dayIndex) => (
                <div
                  key={`${platform}-${dayIndex}`}
                  className={`w-10 h-10 rounded-lg ${getCellColor(value)} transition-opacity hover:opacity-80 cursor-pointer`}
                  title={`${platform} - ${days[dayIndex]}: ${value.toLocaleString()} reach`}
                />
              ))}
            </Fragment>
          ))}
          {/* Empty cell for top-left corner */}
          <div></div>

          {/* Day headers */}
          {days.map((day) => (
            <div key={day} className="text-center text-xs text-gray-500 font-normal pb-1">
              {day}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-600">
          <LegendItem color="bg-indigo-200" label="0–5k" />
          <LegendItem color="bg-indigo-400" label="5k–10k" />
          <LegendItem color="bg-indigo-600" label="10k–50k" />
          <LegendItem color="bg-indigo-800" label=">50k" />
        </div>
      </CardContent>
    </Card>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded ${color}`}></div>
      <span>{label}</span>
    </div>
  );
}