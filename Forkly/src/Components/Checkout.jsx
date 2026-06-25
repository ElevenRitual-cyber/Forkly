import React, { useState } from "react";

export default function Checkout() {
  const [payment, setPayment] = useState("upi");

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Section */}
        <div className="card rounded-xl p-6">
          {/* Delivery Address */}
          <h2 className="text-lg font-semibold mb-6">Delivery Address</h2>

          <div className="flex justify-between items-start border rounded-lg p-4">
            <div className="flex gap-3">
              <input
                type="radio"
                name="address"
                defaultChecked
                className="mt-1"
              />

              <div>
                <h3 className="font-medium">Home</h3>

                <p className="text-sm text-gray-600 mt-3">
                  123, Near Clock Tower,
                  <br />
                  Bhopal 284403
                  <br />
                  +91 9569953200
                </p>
              </div>
            </div>

            <button className="text-sm font-semibold hover:text-blue-500">
              Change
            </button>
          </div>

          {/* Payment Method */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-6">Payment Method</h2>

            <div className="space-y-5">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={payment === "upi"}
                  onChange={() => setPayment("upi")}
                />
                UPI
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                Credit/Debit Card
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={payment === "netbanking"}
                  onChange={() => setPayment("netbanking")}
                />
                Net Banking
              </label>
            </div>
          </div>

          {/* Place Order */}
          <div className="mt-10 flex items-center justify-between">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Place Order
            </button>

            <span className="text-2xl font-bold">$727</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-red-50 rounded-xl p-6 h-fit shadow-sm">
          <h2 className="text-3xl font-bold mb-8">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>3 Items</span>
              <span>$876</span>
            </div>

            <div className="flex justify-between">
              <span>Cheesy Burst Pizza</span>
              <span>$40</span>
            </div>

            <div className="flex justify-between">
              <span>Farmhouse Pizza</span>
              <span>$2</span>
            </div>

            <div className="flex justify-between">
              <span>Garlic Bread</span>
              <span>$2</span>
            </div>
          </div>

          <hr className="my-6" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Items Total</span>
              <span>$876</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$40</span>
            </div>

            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>$2</span>
            </div>

            <div className="flex justify-between">
              <span>Packaging Fee</span>
              <span>$2</span>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total Amount</span>
            <span>$918</span>
          </div>
        </div>
      </div>
    </div>
  );
}