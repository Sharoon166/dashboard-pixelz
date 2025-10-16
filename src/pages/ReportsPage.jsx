import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          View and analyze your data with our comprehensive reports.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {['Sales', 'Users', 'Performance', 'Engagement', 'Traffic', 'Revenue'].map((report) => (
          <Card key={report} className="cursor-pointer transition-all hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {report} Report
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.floor(Math.random() * 100)}</div>
              <p className="text-xs text-muted-foreground">
                +{Math.floor(Math.random() * 20)}% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Select a report to view details
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
