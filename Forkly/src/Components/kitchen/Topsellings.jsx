import {
  IconPizza,
  IconBurger,
} from "@tabler/icons-react";

const items = [
  {
    id: 1,
    name: "Hot Pizza",
    orders: 96,
    revenue: "₹12,460",
    image: "/pizza.png",
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    orders: 72,
    revenue: "₹9,360",
    image: "/farmhouse.png",
  },
  {
    id: 3,
    name: "Veggie Burger",
    orders: 54,
    revenue: "₹5,400",
    image: "/burger.png",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    orders: 48,
    revenue: "₹4,860",
    image: "/pasta.png",
  },
  {
    id: 5,
    name: "Cold Coffee",
    orders: 38,
    revenue: "₹3,250",
    image: "/coffee.png",
  },
];


export default function TopSellingItems() {
  return (
    <div
      className="
      w-full
      bg-white
      border
      border-gray-200
      rounded-3xl
      shadow-sm
      p-6
      max-w-full
    "
    >
      {/* Heading */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Top Selling Items
        </h2>
      </div>

      {/* Scroll Area */}

      <div
        className="
        flex
        flex-col
        gap-5
        h-[320px]
        overflow-y-auto
        pr-2
        custom-scroll
      "
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              justify-between
              p-2
              rounded-xl
              hover:bg-gray-50
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {/* Left */}

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-14
                  h-14
                  rounded-xl
                  object-cover
                  shadow-sm
                "
              />

              <div>

                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.orders} Orders
                </p>

              </div>

            </div>

            {/* Revenue */}

            <p className="font-semibold text-gray-700">
              {item.revenue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}