"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  const [storeSettings, setStoreSettings] = useState({
    storeName: "Nordic Living",
    storeEmail: "hello@nordicliving.com",
    storePhone: "+1 (555) 123-4567",
    storeAddress: "123 Design Street, Portland, OR 97201",
    currency: "USD",
    taxRate: "8",
  });

  const [shippingSettings, setShippingSettings] = useState({
    freeShippingThreshold: "500",
    standardShippingRate: "50",
    expressShippingRate: "100",
    estimatedDelivery: "5-7",
  });

  const [notifications, setNotifications] = useState({
    orderConfirmation: true,
    shippingUpdates: true,
    marketingEmails: false,
    lowStockAlerts: true,
    newOrderAlerts: true,
  });

  const handleSave = () => {
    // Save settings
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Configure your store settings and preferences
        </p>
      </div>

      <Tabs defaultValue="store" className="space-y-6">
        <TabsList>
          <TabsTrigger value="store">Store</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Store Settings */}
        <TabsContent value="store">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>
                Basic information about your store
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input
                    id="storeName"
                    value={storeSettings.storeName}
                    onChange={(e) =>
                      setStoreSettings({
                        ...storeSettings,
                        storeName: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="storeEmail">Store Email</Label>
                  <Input
                    id="storeEmail"
                    type="email"
                    value={storeSettings.storeEmail}
                    onChange={(e) =>
                      setStoreSettings({
                        ...storeSettings,
                        storeEmail: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="storePhone">Phone Number</Label>
                  <Input
                    id="storePhone"
                    value={storeSettings.storePhone}
                    onChange={(e) =>
                      setStoreSettings({
                        ...storeSettings,
                        storePhone: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Input
                    id="currency"
                    value={storeSettings.currency}
                    onChange={(e) =>
                      setStoreSettings({
                        ...storeSettings,
                        currency: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="storeAddress">Store Address</Label>
                <Textarea
                  id="storeAddress"
                  value={storeSettings.storeAddress}
                  onChange={(e) =>
                    setStoreSettings({
                      ...storeSettings,
                      storeAddress: e.target.value,
                    })
                  }
                  className="mt-1"
                  rows={2}
                />
              </div>
              <div className="w-full sm:w-1/4">
                <Label htmlFor="taxRate">Tax Rate (%)</Label>
                <Input
                  id="taxRate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={storeSettings.taxRate}
                  onChange={(e) =>
                    setStoreSettings({
                      ...storeSettings,
                      taxRate: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              </div>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Shipping Settings */}
        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Configuration</CardTitle>
              <CardDescription>
                Set up shipping rates and delivery options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="freeShipping">Free Shipping Threshold ($)</Label>
                  <Input
                    id="freeShipping"
                    type="number"
                    min="0"
                    value={shippingSettings.freeShippingThreshold}
                    onChange={(e) =>
                      setShippingSettings({
                        ...shippingSettings,
                        freeShippingThreshold: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="standardRate">Standard Shipping Rate ($)</Label>
                  <Input
                    id="standardRate"
                    type="number"
                    min="0"
                    value={shippingSettings.standardShippingRate}
                    onChange={(e) =>
                      setShippingSettings({
                        ...shippingSettings,
                        standardShippingRate: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="expressRate">Express Shipping Rate ($)</Label>
                  <Input
                    id="expressRate"
                    type="number"
                    min="0"
                    value={shippingSettings.expressShippingRate}
                    onChange={(e) =>
                      setShippingSettings({
                        ...shippingSettings,
                        expressShippingRate: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="delivery">Estimated Delivery (days)</Label>
                  <Input
                    id="delivery"
                    value={shippingSettings.estimatedDelivery}
                    onChange={(e) =>
                      setShippingSettings({
                        ...shippingSettings,
                        estimatedDelivery: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
              </div>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Configure which notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Order Confirmations</p>
                  <p className="text-sm text-muted-foreground">
                    Receive email confirmations for new orders
                  </p>
                </div>
                <Switch
                  checked={notifications.orderConfirmation}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, orderConfirmation: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Shipping Updates</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when orders are shipped
                  </p>
                </div>
                <Switch
                  checked={notifications.shippingUpdates}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, shippingUpdates: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Low Stock Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts when product stock is low
                  </p>
                </div>
                <Switch
                  checked={notifications.lowStockAlerts}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, lowStockAlerts: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">New Order Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Get instant notifications for new orders
                  </p>
                </div>
                <Switch
                  checked={notifications.newOrderAlerts}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, newOrderAlerts: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional and marketing updates
                  </p>
                </div>
                <Switch
                  checked={notifications.marketingEmails}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, marketingEmails: checked })
                  }
                />
              </div>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
