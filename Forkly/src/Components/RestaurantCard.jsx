import "../css/variable.css";
export default function RestaurantCard({ restaurant }) {
    return (
        <>

            <div className="max-w-sm rounded overflow-hidden shadow-lg card">
                <img className="w-full rounded" src={restaurant.imgs} alt={restaurant.name} />
                <div className="px-3 py-1">
                    <div className="font-bold text-xl ">{restaurant.name}</div>
                </div>
                <div>
                    <span className="rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">{restaurant.ratings}</span>
                    <span className="rounded-full py-1 text-sm font-semibold text-gray-700">{restaurant.estTime}</span>
                    <p className="rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{restaurant.type}</p>
                </div>
            </div>


        </>
    )
}