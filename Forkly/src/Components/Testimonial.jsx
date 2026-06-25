import { useState, useEffect } from "react";

// import person1 from "../asset/tb.png";
// import person2 from "../assets/tb.png";
// import person3 from "../assets/tb.png";
import tb from "../assets/Seafood.png";

const reviews = [
  {
    id: 1,
    name: "Mayank Patel",
    image: tb,
    review:
      "Absolutely incredible experience! We stopped by for Sunday brunch and were blown away. The avocado toast was loaded with fresh ingredients, and the poached eggs were cooked to perfection. The highlight, though, was the house-made chai latte—not too sweet, just the right amount of spice. The staff was super attentive despite the rush. Will definitely be making this a weekly regular spot!",
  },
  {
    id: 2,
    name: "John Smith",
    image: tb,
    review:
      "The pizzas were absolutely delicious and arrived hot. The delivery was on time, and the packaging was neat. Everything tasted fresh, and the customer service was excellent. Highly recommended!",
  },
  {
    id: 3,
    name: "Emma Watson",
    image: tb,
    review:
      "This has quickly become my favorite place to order food from. The quality is always consistent, the portions are generous, and the prices are reasonable. Looking forward to trying more dishes!",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    
  <div className="w-full mt-20">
    <div className="w-full bg-red-50 px-6 md:px-10 lg:px-20 py-12">
      <div
        className={`flex flex-col lg:flex-row items-center gap-10 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Customer Image */}
        <div className="flex-shrink-0">
          <img
            src={review.image}
            alt={review.name}
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Review Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-6">
            What customers think about us?
          </h2>

          <p className="text-gray-700 leading-8 text-justify">
            "{review.review}"
          </p>

          <p className="text-right mt-8 font-semibold">
            ~ {review.name}
          </p>

          {/* Indicator Dots */}
          <div className="flex justify-center lg:justify-start gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-8 h-3 bg-red-500"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}