
// for desktops we will have two columns
// while going from desktop to mobile we
// will shrink the fonts till
// we reaches the mobile, when
// mobile breakpoint for mobile hits
// we will remove the 1st col
// and use the overlay forms for filters

import FilterForm from "./FiltersForm";

export default function SearchPage(){
    return(
        <>
         <div className="flex ">
            <div>
                {/* 1st Column */}
                <FilterForm />
            </div>
            {/* yaha par hum */}
            <div className="flex justify-between ">
                {/* 2nd column */}
                {/* search query ke result ka length aayega yaha */}
                <p>12 Result Found</p>

                <p>Filter</p>
            </div>
         </div>
        </>
    )
}