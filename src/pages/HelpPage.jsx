import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, HelpCircle, FileText, Video } from 'lucide-react';

export default function HelpPage() {
  const helpSections = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using our dashboard',
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      link: '#',
    },
    {
      title: 'User Guide',
      description: 'Comprehensive guide to all features',
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: '#',
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: <Video className="h-6 w-6 text-primary" />,
      link: '#',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">How can we help you?</h1>
        <p className="text-muted-foreground mt-2">
          Get answers to your questions about our dashboard and services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {helpSections.map((section, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {section.icon}
                </div>
                <div>
                  <h3 className="font-medium">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-medium">Chat with us</h3>
                <p className="text-muted-foreground text-sm">
                  Our team is here to help in real-time during business hours.
                </p>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Start Chat
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Email us</h3>
                <p className="text-muted-foreground text-sm">
                  We'll get back to you within 24 hours.
                </p>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-medium mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  'How do I reset my password?',
                  'Where can I find my billing information?',
                  'How do I export my data?',
                  'What are the system requirements?',
                ].map((question, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                    <span className="text-sm">{question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
