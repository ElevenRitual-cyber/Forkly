import EarningsChart from "./kitchen/EarningsChart";
import RecentOrders from "./kitchen/RecentOrders";
import Sidebar from "./kitchen/Sidebar";
import StatsSection from "./kitchen/StatsSection";
import TopSellingItems from "./kitchen/Topsellings";

export default function Food() {
    return (
        <div className="min-h-screen bg-[#fafafa] flex">

            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}

            <main className="flex-1 px-6 md:px-8 lg:px-10 py-8 overflow-y-auto">

               <RecentOrders compact={true} fullWidth={false} />

            </main>

        </div>
    );
}