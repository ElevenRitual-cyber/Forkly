
// for desktops we will have two columns
// while going from desktop to mobile we
// will shrink the fonts till
// we reaches the mobile, when
// mobile breakpoint for mobile hits
// we will remove the 1st col
// and use the overlay forms for filters

import Card from "./cards";
import FilterForm from "./FiltersForm";
export default function SearchPage() {
    return (
        <>

            <div className="flex gap-6 p-6 justify-center p-20">

                {/* Sidebar */}
                <aside className="hidden lg:block w-80 flex-shrink-0">
                    <FilterForm />
                </aside>

                {/* Main Content */}
                <div className="flex-1">

                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-lg font-semibold">
                            12 Results Found
                        </p>

                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                            Filter
                        </button>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex-1 overflow-y-auto h-[calc(100vh-80px)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                             <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}