import Cart, { Bill } from "./Cart";
import "../css/variable.css";
export default function CartPage() {
   return (
      <>
         <div className="flex flex-col p-10 gap-10 ">
            {/* two rows */}
            <div>
               <p className="text-2xl font-semibold">Your cart </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
               {/* Cart Section */}
               <div className="w-full lg:w-2/3 overflow-y-auto max-h-[500px]">
                  <Cart />
                  <Cart />
                  <Cart />
                  <Cart />
                  <Cart />
                  <Cart />
               </div>

               {/* Bill Section */}
               <div className="w-full lg:w-1/3 flex justify-center ">
                  <Bill />
               </div>
            </div>
         </div>


      </>
   )
}