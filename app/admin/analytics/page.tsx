"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 42, revenue: 52400 },
  { month: "Feb", sales: 58, revenue: 68600 },
  { month: "Mar", sales: 72, revenue: 84200 },
  { month: "Apr", sales: 64, revenue: 72800 },
  { month: "May", sales: 89, revenue: 102000 },
  { month: "Jun", sales: 95, revenue: 115500 },
  { month: "Jul", sales: 78, revenue: 89800 },
  { month: "Aug", sales: 102, revenue: 118300 },
  { month: "Sep", sales: 118, revenue: 136100 },
  { month: "Oct", sales: 132, revenue: 152400 },
  { month: "Nov", sales: 145, revenue: 168200 },
  { month: "Dec", sales: 168, revenue: 195800 },
];

const categoryData = [
  { name: "Sofas", value: 35 },
  { name: "Chairs", value: 28 },
  { name: "Tables", value: 20 },
  { name: "Beds", value: 12 },
  { name: "Storage", value: 5 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--muted-foreground))",
  "hsl(var(--ring))",
  "hsl(var(--border))",
];

const topProducts = [
  { name: "Stockholm Sofa", revenue: 124950, units: 50 },
  { name: "Oslo Lounge Chair", revenue: 89931, units: 69 },
  { name: "Bergen Dining Table", revenue: 75960, units: 40 },
  { name: "Malmö Side Table", revenue: 62406, units: 179 },
  { name: "Helsinki Bed Frame", revenue: 53970, units: 30 },
];

const conversionData = [
  { week: "W1", visitors: 2400, conversions: 120 },
  { week: "W2", visitors: 2800, conversions: 168 },
  { week: "W3", visitors: 3200, conversions: 192 },
  { week: "W4", visitors: 2900, conversions: 145 },
  { week: "W5", visitors: 3500, conversions: 210 },
  { week: "W6", visitors: 3800, conversions: 266 },
  { week: "W7", visitors: 4100, conversions: 287 },
  { week: "W8", visitors: 4500, conversions: 315 },
];

export default function AdminAnalyticsPage() {
  const totalRevenue = salesData.reduce((sum, d) => sum + d.revenue, 0);
  const totalSales = salesData.reduce((sum, d) => sum + d.sales, 0);
  const avgOrderValue = totalRevenue / totalSales;
  const conversionRate = (
    (conversionData.reduce((sum, d) => sum + d.conversions, 0) /
      conversionData.reduce((sum, d) => sum + d.visitors, 0)) *
    100
  ).toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Analytics
        </h1>
        <p className="text-muted-foreground">
          Insights and performance metrics for your store
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Annual Revenue</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              ${(totalRevenue / 1000).toFixed(0)}K
            </p>
            <p className="text-xs text-green-600 mt-1">+23.5% vs last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              {totalSales.toLocaleString()}
            </p>
            <p className="text-xs text-green-600 mt-1">+18.2% vs last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Avg. Order Value</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              ${avgOrderValue.toFixed(0)}
            </p>
            <p className="text-xs text-green-600 mt-1">+4.3% vs last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              {conversionRate}%
            </p>
            <p className="text-xs text-green-600 mt-1">+1.2% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue & Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue & Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis yAxisId="left" className="text-xs" />
                <YAxis yAxisId="right" orientation="right" className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number, name: string) => [
                    name === "revenue" ? `$${value.toLocaleString()}` : value,
                    name === "revenue" ? "Revenue" : "Sales",
                  ]}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.2)"
                  strokeWidth={2}
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="sales"
                  stroke="hsl(var(--accent))"
                  fill="hsl(var(--accent) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Category & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {categoryData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Share"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Products by Revenue */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products by Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis type="number" className="text-xs" />
                  <YAxis
                    type="category"
                    dataKey="name"
                    className="text-xs"
                    width={110}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      "Revenue",
                    ]}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="hsl(var(--primary))"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Visitor to Customer Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Visitors"
                />
                <Line
                  type="monotone"
                  dataKey="conversions"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Conversions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
