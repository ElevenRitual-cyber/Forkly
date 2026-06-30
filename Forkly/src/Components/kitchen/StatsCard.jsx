export default function StatsCard({
    icon,
    title,
    value,
    subtitle,
    iconBg,
    iconColor,
}) {
    return (
        <div
            className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            p-5
            shadow-sm
            hover:shadow-md
            hover:-translate-y-1
            transition-all
            duration-300
            cursor-pointer
        "
        >
            <div className="flex items-start gap-4">

                {/* Icon */}

                <div
                    className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${iconBg}
                `}
                >
                    <span className={iconColor}>
                        {icon}
                    </span>
                </div>

                {/* Content */}

                <div className="flex flex-col">

                    <p className="text-sm text-gray-500 font-medium">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-1">
                        {value}
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                        {subtitle}
                    </p>

                </div>

            </div>
        </div>
    );
}