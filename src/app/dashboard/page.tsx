import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { DashboardStats } from "./DashboardStats";
import { RecentSales } from "./RecentSales";
import { Chart } from "./Chart";
import { client } from "@/lib/prisma";

async function getData() {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDay() - 7);

  const data = await client.order.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      amount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  const result = data.map((item) => ({
    date: new Intl.DateTimeFormat("en-US").format(item.createdAt),
    revenue: item.amount / 100,
  }));
  return result;
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <>
      <DashboardStats />

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>

        <RecentSales />
      </div>
    </>
  );
}
