import { Outlet } from "react-router-dom";
import EarningsChart from "./Components/kitchen/EarningsChart";
import RecentOrders from "./Components/kitchen/RecentOrders";
import Sidebar from "./Components/kitchen/Sidebar";
import StatsSection from "./Components/kitchen/StatsSection";
import TopSellingItems from "./Components/kitchen/Topsellings";


export default function OwnerLayout() {
    return (
        <div className="min-h-screen bg-[#fafafa] flex">

            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}

            <main className="flex-1 px-6 md:px-8 lg:px-10 py-8 overflow-y-auto">
                 <Outlet />
             

            </main>

        </div>
    );
}