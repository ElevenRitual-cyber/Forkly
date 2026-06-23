import tb from "../assets/Seafood.png";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import "../css/variable.css";
// It will receive an object containing the data about
// the things user have bought
export default function Cart() {
    return (
        <div className="flex flex-col ">
            {/* make two rows */}
            <div>
                <p className="text-3xl font-semibold">Your Cart</p>
                <p>3 Item</p>

            </div>
            <div className="flex items-center ">
                {/* add three divs here  */}
                <div className="card-image w-50 p-4">
                    <img src={tb} alt="Item" className="rounded" />
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <p className="text-2xl">Item Name</p>
                    <p className="text-sm">342.3</p>
                </div>
                <div className="m-10">
                    <QuantitySelector />

                </div>

            </div>


        </div>
    )
}



// will receive an object that will contain the id 
// about the item, which will help use to
// place order and add or remove the items
function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const removeItem = () => {
        console.log("Item removed");
    };

    return (
        <div className="flex items-center gap-4">
            {/* Quantity Counter */}
            <div className="flex items-center rounded-lg border border-gray-300 shadow-sm overflow-hidden bg-white">
                <button
                    onClick={decreaseQuantity}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    -
                </button>

                <span className="w-8 h-8 flex items-center justify-center border-x border-gray-300 text-sm font-medium">
                    {quantity}
                </span>

                <button
                    onClick={increaseQuantity}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    +
                </button>
            </div>

            {/* Delete Button */}
            <button
                onClick={removeItem}
                className="text-gray-600 hover:text-red-500 transition-colors"
            >
                <Trash2 size={16} />
            </button>
        </div>
    );
}

export function Bill() {
    return (
        <>
            <div className=" flex flex-col checkout
                            w-full
                            md:w-1/2
                            lg:w-1/4 items-center">
                
                    <p className="text-2xl self-start p-3">Bill Details</p>
                
                
                <div className=" flex flex-col w-90 gap-3 p-5">
                    <div className="flex justify-between">
                        <p>Items Total</p>
                        <p>876</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Delivery Fee</p>
                        <p>876</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Platfrom Fee</p>
                        <p>876</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Packaging Fee</p>
                        <p>2</p>
                    </div>
                    <div className="flex justify-between border-t-2 500" >
                        <p>Total Amount</p>
                        <p>200rs</p>
                    </div>

                    <button className="btn btn-primary">Proceed to Checkout</button>
                </div>

            </div>

        </>
    )
}