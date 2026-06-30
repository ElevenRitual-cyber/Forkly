import {
    IconLayoutDashboard,
    IconNoDerivatives,
    IconMenu2,
    IconCategory,
    IconStar,
    IconWallet,
    IconUserCircle,
    IconLogout,
} from "@tabler/icons-react";

// Single source of truth for nav items.
// Add/remove/reorder a link by editing this array — no JSX duplication.
const MENU_ITEMS = [
    { label: "Dashboard", icon: IconLayoutDashboard, href: "/dashboard" },
    { label: "Orders", icon: IconNoDerivatives, href: "/orders" },
    { label: "Menu Items", icon: IconMenu2, href: "/menu-items" },
    { label: "Categories", icon: IconCategory, href: "/categories" },
    { label: "Reviews", icon: IconStar, href: "/reviews" },
    { label: "Earnings", icon: IconWallet, href: "/earnings" },
    { label: "Profile", icon: IconUserCircle, href: "/profile" },
];

// One row, parameterized. This is the piece that was being copy-pasted 7 times.
function SidebarItem({ icon: Icon, label, href, active = false }) {
    return (
        <a
            href={href}
            className={`flex gap-3 text-xl items-center ${active ? "text-orange-500" : ""
                }`}
        >
            <Icon size={34} stroke={2} />
            <span>{label}</span>
        </a>
    );
}

export default function Sidebar() {
    return (
        <div className="w-full max-w-[300px] lg:max-w-[320px] h-screen border-r border-gray-200 flex flex-col justify-between px-6 py-8">
            <div className="flex flex-col">
                <p className="font-bold text-2xl mb-6">Forkly</p>

                <nav className="menu flex flex-col gap-8">
                    {MENU_ITEMS.map((item) => (
                        <SidebarItem key={item.label} {...item} />
                    ))}
                </nav>
            </div>

            {/* Logout sits outside MENU_ITEMS since it's an action, not a route */}
            <button className="flex gap-3 text-xl items-center">
                <IconLogout size={34} stroke={2} />
                <span>Logout</span>
            </button>
        </div>
    );
}