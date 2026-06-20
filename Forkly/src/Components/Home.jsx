import tb from "../assets/tb.png";
import "../css/home.css";
import CategoryCard from "./CategoryCard";
import Slider from "./Slider";
export default function Home() {
    return (
        <>
            <div className="
          hero-section
          flex
          justify-center
          items-center
          px-10
          
         
          ">
                <div className="flex flex-col w-141">
                    <p className="text-5xl">
                        Swift Delivery, Trusted Service
                    </p>
                    <p className="text-5xl">
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
                        className="w-full h-80 object-cover self-end " />
                </div>
            </div>
            {/* Here we will add the hero-cards */}
            <div>
                <p className="text-5xl">Thinking of Something delicious?</p>
                <Slider />
                
            </div>
        </>
    )
}