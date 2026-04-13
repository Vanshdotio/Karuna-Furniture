"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Eye, Package } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  email: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  address: string;
}

const initialOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "Sarah Anderson",
    email: "sarah@example.com",
    items: [
      { name: "Stockholm Sofa", quantity: 1, price: 2499 },
      { name: "Malmö Side Table", quantity: 2, price: 349 },
    ],
    total: 3197,
    status: "delivered",
    date: "2024-03-15",
    address: "123 Oak Street, Portland, OR 97201",
  },
  {
    id: "ORD-002",
    customer: "Michael Chen",
    email: "michael@example.com",
    items: [{ name: "Oslo Lounge Chair", quantity: 2, price: 1299 }],
    total: 2598,
    status: "shipped",
    date: "2024-03-14",
    address: "456 Pine Ave, Seattle, WA 98101",
  },
  {
    id: "ORD-003",
    customer: "Emma Williams",
    email: "emma@example.com",
    items: [{ name: "Bergen Dining Table", quantity: 1, price: 1899 }],
    total: 1899,
    status: "processing",
    date: "2024-03-13",
    address: "789 Maple Drive, San Francisco, CA 94102",
  },
  {
    id: "ORD-004",
    customer: "James Brown",
    email: "james@example.com",
    items: [
      { name: "Copenhagen Bookshelf", quantity: 1, price: 899 },
      { name: "Aarhus Armchair", quantity: 1, price: 899 },
    ],
    total: 1798,
    status: "pending",
    date: "2024-03-12",
    address: "321 Cedar Lane, Denver, CO 80202",
  },
  {
    id: "ORD-005",
    customer: "Lisa Davis",
    email: "lisa@example.com",
    items: [{ name: "Helsinki Bed Frame", quantity: 1, price: 1799 }],
    total: 1799,
    status: "delivered",
    date: "2024-03-11",
    address: "654 Birch Road, Austin, TX 78701",
  },
];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Orders
        </h1>
        <p className="text-muted-foreground">
          Manage and track customer orders
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by order ID or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Orders ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Total
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      {order.id}
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {order.customer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {order.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">
                      ${order.total.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <Select
                        value={order.status}
                        onValueChange={(value) =>
                          updateOrderStatus(order.id, value as Order["status"])
                        }
                      >
                        <SelectTrigger className="w-[130px] h-8">
                          <span
                            className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full capitalize ${
                              statusColors[order.status]
                            }`}
                          >
                            {order.status}
                          </span>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order Details
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-medium text-foreground">
                    {selectedOrder.id}
                  </p>
                </div>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full capitalize ${
                    statusColors[selectedOrder.status]
                  }`}
                >
                  {selectedOrder.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Customer</p>
                <p className="font-medium text-foreground">
                  {selectedOrder.customer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedOrder.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Shipping Address</p>
                <p className="text-foreground">{selectedOrder.address}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-sm bg-secondary/50 p-2 rounded"
                    >
                      <span className="text-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium text-foreground">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="font-semibold text-foreground">
                    ${selectedOrder.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
