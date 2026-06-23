import "../css/variable.css";
export default function FilterForm() {
    return (
        <>
            <form action="" className="flex flex-col w-full
            max-w-[300px]
            p-4
            border-theme rounded-theme" >
                <div className="form-header flex justify-between">
                    <p className="font-semibold">
                        Filters
                    </p>
                    <p className="">
                        Clear All
                    </p>
                </div>
                <div className="filters">
                    <p className="font-semibold">Sort By</p>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="popularity"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="popularity">Popularity</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="rating"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="rating">Rating</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="delivery"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="delivery">Fast Delivery</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="offers"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="offers">Offers</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* another filter */}
                <div className="filters">
                    <p className="font-semibold">Cuisine</p>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="all"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="all">All</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="northindian"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="northindian">North Indian</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="fastfood"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="fastfood">Fast Food</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="chinese"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="chinese">Chinese</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="Italian"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="italian">Italian</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delivery time wala filter */}
                <div className="filters">
                    <p className="font-semibold">Delivery Time</p>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="under_20"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="under_20">Under 20 mins</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="20_to_30"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="20_to_30">20-30 mins</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="30_to_45"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="30_to_45">30-45 mins</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="above_45"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="above_45">45+ mins</label>
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="Italian"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="italian">Italian</label>
                            </div> */}
                        </div>
                    </div>
                </div>


                {/*  another fucking filter rating wala*/}
                <div className="filters">
                    <p className="font-semibold">Ratings</p>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="4_and_above"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="4_and_above">4.0 & above</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="3.5_and_above"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="3.5_and_above">3.5 & above</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="3.0_and_above"
                                    className="w-4 h-4 rounded-full accent-red-500"
                                />
                                <label htmlFor="3.0_and_above">3.0 & above</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <input type="sumbit"> Apply Filters </input> */}
                <button className="btn-primary self-center">Apply Filters</button>


            </form>
        </>
    )
}