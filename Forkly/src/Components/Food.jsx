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

                {/* Header */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div>

                        <h1 className="text-4xl font-bold text-gray-800">
                            Welcome back, John! 👋
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Here's what's happening with your restaurant today.
                        </p>

                    </div>

                    <div className="flex gap-4 items-center">

                        <select
                            className="
                            border
                            border-gray-200
                            rounded-xl
                            px-4
                            py-2
                            outline-none
                            "
                        >
                            <option>Hot Pizza</option>
                        </select>

                        <img
                            src="/avatar.jpg"
                            alt=""
                            className="w-12 h-12 rounded-full object-cover"
                        />

                    </div>

                </div>

                {/* Stats */}

                <div className="mt-8">
                    <StatsSection />
                </div>

                {/* Dashboard */}

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-8">

                    {/* Recent Orders */}

                    <div className="xl:col-span-5">
                        <RecentOrders />
                    </div>

                    {/* Right Side */}

                    <div className="xl:col-span-7 flex flex-col gap-6">

                        <EarningsChart />

                        <TopSellingItems />

                    </div>

                </div>

            </main>

        </div>
    );
}