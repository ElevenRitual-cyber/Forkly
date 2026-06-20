import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import CategoryCard from "./CategoryCard";

export default function Slider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full">

            <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10  shadow-lg rounded-full px-4 py-2"
            >
                ◀
            </button>

            <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10  shadow-lg rounded-full px-4 py-2"
            >
                ▶
            </button>

            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={5}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
            >
                <SwiperSlide><CategoryCard /></SwiperSlide>
                <SwiperSlide><CategoryCard /></SwiperSlide>
                <SwiperSlide><CategoryCard /></SwiperSlide>
                <SwiperSlide><CategoryCard /></SwiperSlide>
                <SwiperSlide><CategoryCard /></SwiperSlide>
                <SwiperSlide><CategoryCard /></SwiperSlide>
            </Swiper>

        </div>
    );
}