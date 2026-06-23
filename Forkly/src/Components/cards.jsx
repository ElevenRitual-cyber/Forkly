import tb from "../assets/Seafood.png";
export default function Card(){
    return(
        <>
         <div className="flex flex-row card h-50 p-5  gap-8 ">
            <div className="card-image w-60">
                <img src={tb} alt="Item" className="rounded" />
            </div>
            <div className="flex flex-col gap-4 justify-center ">
                <p className="text-2xl">Name</p>
                <p className="font-light">Type</p>
                <p><span>Ratings</span> | <span>est time</span></p>
                <p>Location</p>
            </div>
            <div className="flex self-end items-end">
                <button className="btn btn-primary flex-end">View Menu</button>
            </div>
         </div>
        </>
    )
}