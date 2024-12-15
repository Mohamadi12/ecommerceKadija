import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

const Dashboard = () => {
  return (
    <>
      <DashboardStats />
      
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>

       <RecentSales/>
      </div>
    </>
  );
};

export default Dashboard;
