import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Tell us a little about yourself" />
          </div>
          <Button>Update Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for important updates.
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-muted-foreground">
                Toggle between light and dark theme.
              </p>
            </div>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium">Delete Account</h3>
            <p className="text-sm text-muted-foreground">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
