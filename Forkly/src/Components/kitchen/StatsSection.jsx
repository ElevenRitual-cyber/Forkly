import {
    IconClipboardList,
    IconCurrencyRupee,
    IconEye,
    IconStarFilled,
    IconTrendingUp,
} from "@tabler/icons-react";

import StatsCard from "./StatsCard";

const stats = [
    {
        title: "Total Orders",
        value: "128",
        subtitle: (
            <span className="flex items-center gap-1 text-green-500">
                <IconTrendingUp size={15} />
                18% vs yesterday
            </span>
        ),
        icon: <IconClipboardList size={28} />,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
    },

    {
        title: "Total Revenue",
        value: "₹24,560",
        subtitle: (
            <span className="flex items-center gap-1 text-green-500">
                <IconTrendingUp size={15} />
                22% vs yesterday
            </span>
        ),
        icon: <IconCurrencyRupee size={28} />,
        iconBg: "bg-pink-100",
        iconColor: "text-pink-500",
    },

    {
        title: "Active Items",
        value: "48",
        subtitle: "View all items",
        icon: <IconEye size={28} />,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },

    {
        title: "Average Rating",
        value: "4.3",
        subtitle: (
            <span className="flex items-center gap-1 text-green-500">
                <IconTrendingUp size={15} />
                0.2 vs last week
            </span>
        ),
        icon: <IconStarFilled size={28} />,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-500",
    },
];

export default function StatsSection() {
    return (
        <section
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            w-full
        "
        >
            {stats.map((item) => (
                <StatsCard
                    key={item.title}
                    {...item}
                />
            ))}
        </section>
    );
}