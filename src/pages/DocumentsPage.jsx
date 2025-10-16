import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Trash2, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DocumentsPage() {
  const documents = [
    { id: 1, name: 'Q1-Report-2023.pdf', type: 'PDF', size: '2.4 MB', uploaded: '2 days ago' },
    { id: 2, name: 'User-Guide.docx', type: 'DOCX', size: '1.8 MB', uploaded: '1 week ago' },
    { id: 3, name: 'Presentation.pptx', type: 'PPTX', size: '5.2 MB', uploaded: '2 weeks ago' },
    { id: 4, name: 'Budget-2023.xlsx', type: 'XLSX', size: '3.1 MB', uploaded: '3 weeks ago' },
    { id: 5, name: 'Meeting-Notes.txt', type: 'TXT', size: '0.1 MB', uploaded: '1 month ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Upload and manage your documents in one place.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="w-full appearance-none bg-background pl-8"
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" className="h-9">
            Upload
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{doc.name}</h3>
                    <p className="text-sm text-muted-foreground">{doc.type} • {doc.size} • {doc.uploaded}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
