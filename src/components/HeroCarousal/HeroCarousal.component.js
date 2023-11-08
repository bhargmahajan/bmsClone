import React, {useState, useEffect} from "react";

import HeroSlider from "react-slick";
import axios from "axios";

/**
import { NextArrow, PrevArrow } from "./Arrows.component";
*/

const HeroCarousal= () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const requestNowPlayingMovies  = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
            console.log(getImages);
        };
        requestNowPlayingMovies();
        
    }, []);

    const settingsLg = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding: "300px",
        infinite: true,
        /*
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
        */
    }
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        /*
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
        */
    };

    return(
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {
                images.map((image) => (
                    <div className="w-full h-48 md:h-68 py-3">
                        <img src={'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg'} 
                        alt="testing" className="w-full h-full rounded-md" />
                    </div>
                ))
            }
        </HeroSlider>
        </div>
        <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
            {
                images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg'} 
                        alt="testing" className="w-full h-full rounded-md" />
                    </div>
                ))
            }
        </HeroSlider>
        </div>
        </>
    );
};

export default HeroCarousal;