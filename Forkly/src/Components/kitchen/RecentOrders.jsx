const orders = [
  {
    id: "#FDZ1234",
    image: "/pizza.png",
    items: 2,
    price: 727,
    status: "Delivered",
    time: "10 mins ago",
  },
  {
    id: "#FDZ1233",
    image: "/burger.png",
    items: 3,
    price: 1249,
    status: "Preparing",
    time: "20 mins ago",
  },
  {
    id: "#FDZ1232",
    image: "/pasta.png",
    items: 1,
    price: 249,
    status: "Confirmed",
    time: "30 mins ago",
  },
  {
    id: "#FDZ1231",
    image: "/cake.png",
    items: 2,
    price: 349,
    status: "Delivered",
    time: "1 hr ago",
  },
  {
    id: "#FDZ1230",
    image: "/juice.png",
    items: 4,
    price: 899,
    status: "Preparing",
    time: "1 hr ago",
  },
  {
    id: "#FDZ1229",
    image: "/pizza.png",
    items: 1,
    price: 540,
    status: "Delivered",
    time: "2 hrs ago",
  },
];

const statusColor = {
  Delivered: "bg-green-500",
  Preparing: "bg-orange-400",
  Confirmed: "bg-lime-500",
};

export default function RecentOrders() {
  return (
    <div
      className="
      w-full
      max-w-full
      sm:max-w-lg
      lg:max-w-xl
      xl:max-w-2xl
      bg-white
      border
      border-gray-200
      rounded-3xl
      shadow-sm
      p-6
    "
    >
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Recent Orders
        </h2>
      </div>

      {/* Orders */}

      <div
        className="
        h-[470px]
        overflow-y-auto
        pr-2
        flex
        flex-col
        gap-5
        custom-scroll
      "
      >
        {orders.map((order) => (
          <div
            key={order.id}
            className="
              flex
              justify-between
              items-center
              p-3
              rounded-2xl
              hover:bg-gray-50
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {/* Left */}

            <div className="flex items-center gap-4">
              <img
                src={order.image}
                alt=""
                className="
                  w-16
                  h-16
                  rounded-xl
                  object-cover
                  shadow
                "
              />

              <div>
                <h3 className="font-semibold text-gray-800">
                  Order {order.id}
                </h3>

                <p className="text-sm text-gray-400">
                  {order.items} Items
                </p>
              </div>
            </div>

            {/* Right */}

            <div className="text-right">
              <h3 className="font-bold text-gray-800">
                ₹{order.price}
              </h3>

              <div className="flex justify-end items-center gap-2 mt-1">
                <span
                  className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    ${statusColor[order.status]}
                  `}
                ></span>

                <span
                  className={`
                    text-sm
                    font-medium
                    ${
                      order.status === "Delivered"
                        ? "text-green-500"
                        : order.status === "Preparing"
                        ? "text-orange-400"
                        : "text-lime-500"
                    }
                  `}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                {order.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}