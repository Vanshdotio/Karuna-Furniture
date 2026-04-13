"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Mail, Phone } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  joinDate: string;
}

const customers: Customer[] = [
  {
    id: "1",
    name: "Sarah Anderson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    orders: 8,
    totalSpent: 12450,
    joinDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@example.com",
    phone: "+1 (555) 234-5678",
    orders: 5,
    totalSpent: 8920,
    joinDate: "2023-08-22",
  },
  {
    id: "3",
    name: "Emma Williams",
    email: "emma@example.com",
    phone: "+1 (555) 345-6789",
    orders: 12,
    totalSpent: 24680,
    joinDate: "2022-11-10",
  },
  {
    id: "4",
    name: "James Brown",
    email: "james@example.com",
    phone: "+1 (555) 456-7890",
    orders: 3,
    totalSpent: 4560,
    joinDate: "2024-01-05",
  },
  {
    id: "5",
    name: "Lisa Davis",
    email: "lisa@example.com",
    phone: "+1 (555) 567-8901",
    orders: 7,
    totalSpent: 15230,
    joinDate: "2023-03-18",
  },
  {
    id: "6",
    name: "Robert Wilson",
    email: "robert@example.com",
    phone: "+1 (555) 678-9012",
    orders: 2,
    totalSpent: 3299,
    joinDate: "2024-02-28",
  },
  {
    id: "7",
    name: "Jennifer Taylor",
    email: "jennifer@example.com",
    phone: "+1 (555) 789-0123",
    orders: 15,
    totalSpent: 32150,
    joinDate: "2022-05-12",
  },
  {
    id: "8",
    name: "David Martinez",
    email: "david@example.com",
    phone: "+1 (555) 890-1234",
    orders: 4,
    totalSpent: 6780,
    joinDate: "2023-09-30",
  },
];

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCustomers = customers.length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgOrderValue = totalRevenue / customers.reduce((sum, c) => sum + c.orders, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Customers
        </h1>
        <p className="text-muted-foreground">
          View and manage customer information
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Customers</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              {totalCustomers}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              ${totalRevenue.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Avg. Order Value</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              ${avgOrderValue.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Customers ({filteredCustomers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Orders
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Total Spent
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Member Since
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-foreground">
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span className="font-medium text-foreground">
                          {customer.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {customer.phone}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">
                      {customer.orders}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      ${customer.totalSpent.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(customer.joinDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
