import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";
import settings from "../config/PosterCarousal.config";
import PremiereImages from "../config/TempPosters.config";

export const Premiere = () => {
    return (
        <>
        <div className="flex flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
        <Slider {...settings}>
        {PremiereImages.map((image)=> (
        <Poster {...image} isDark />
        ))}
        </Slider>
        </>
    );
};

export default Premiere;