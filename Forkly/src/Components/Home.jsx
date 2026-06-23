import tb from "../assets/tb.png";
import "../css/home.css";
import CategoryCard from "./CategoryCard";
import RestaurantCard from "./RestaurantCard";
import Slider from "./Slider";
import seafood from "../assets/Seafood.png";
import "../css/variable.css";
import FilterForm from "./FiltersForm";

const restaurant = {
    name: "Fine Dine",
    ratings: 4.5,
    estTime: "23 mints",
    type: "veg",
    imgs: seafood

}
export default function Home() {
    return (
        <>
            <div className="
          hero-section
          flex
          justify-center
          items-center
          px-5
          
         
          ">
                <div className="flex flex-col w-141">
                    <p className="text-4xl">
                        Swift Delivery, Trusted Service
                    </p>
                    <p className="text-4xl">
                        <span className="font-bold text-5xl">Experience </span>
                        the Best !
                    </p>
                    <p className="text-2xl">
                        Cravinng something yummy?
                    </p>
                    <p className="text-2xl">
                        Food you love , delivered fast to your doorstep.
                    </p>
                    {/* here we will put the search bar */}
                </div>
                {/* put the image here */}
                <div className="flex-1 x flex justify-end">
                    <img src={tb} alt=""
                        className="w-172 h-auto object-contain " />
                </div>
            </div>
            {/* Here we will add the hero-cards */}
            <div className="slider">
                <p className="text-5xl">Thinking of Something delicious?</p>
                <Slider />
                <div className="line"></div>

            </div>
            <div>
                <p className=" slider restaurant-card">
                    <p className="text-4xl">Leading Restaurants</p>
                    <div className="container-theme 
                    grid grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-2 lg:grid-cols-4 gap-20
                    bg-primary
                    p-10 rounded">
                        <RestaurantCard restaurant={restaurant} />
                        <RestaurantCard restaurant={restaurant} />
                        <RestaurantCard restaurant={restaurant} />
                        <RestaurantCard restaurant={restaurant} />
                    </div>

                </p>
            </div>
            <div>
                <p className=" slider restaurant-card">
                    <p className="text-4xl">Leading Restaurants</p>
                    <div className="container-theme 
                    grid grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-2 lg:grid-cols-4 gap-20
                    bg-primary
                    p-10 rounded">
                        <RestaurantCard restaurant={restaurant} />
                        <RestaurantCard restaurant={restaurant} />
                        <RestaurantCard restaurant={restaurant} />
                        <RestaurantCard restaurant={restaurant} />
                    </div>
                    
                </p>
            </div>
        </>
    )
}