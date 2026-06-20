import B from "../assets/Birayani.png";
import "../css/categoryCard.css";

//This will get an object representing the category 
export default function CategoryCard({category}) {
    return (
        <>
            <div className="flex flex-col items-center">
                {/* this will have two elements */}

                <div className="card-image-container
                 shadow-theme flex 
                 flex-col items-center
                 card ">
                    {/* This will act as a container for image */}
                    {/* <img src={B} alt="" />
                 <p className="text-md">Name</p> */}
                    
                        <img src={B} alt="Biryani" />
                            <p className="text-md">Biryani</p>
                   
                </div>
                {/* This will hold the name of the card */}

            </div>
        </>
    )
}