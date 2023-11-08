import React from "react";

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/tiger-3-et00313411-1698386589.jpg"
            alt="poster"
            className="w-full h-full"
            />
        </div>

        <div className="hidden md:block lg:hidden">
        <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/tiger-3-et00313411-1698386589.jpg"
            alt="poster"
            className="w-full h-full"
            />
        </div>

        <div className="relative hidden lg:block" style={{height: "30rem"}}>
            <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/tiger-3-et00313411-1698386589.jpg"
            alt="poster"
            className="absolute w-full h-full"
            /> 
            <div className="absolute h-full w-full z-10" style={{backgroundImage: "linear-gradient(90deg, rgb(27, 27, 27) 24.97%, rgb(27, 27, 27) 28.3%, rgba(27, 27, 27, 0.04) 87.47%, rgb(27, 27, 27) 100%)"}} />
                <div className="absolute z-30 w-64 h-96 left-48 top-10">
                <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00313411-dvmdcxgrrk-portrait.jpg"
                alt="poster"
                className="w-full h-full rounded-xl"
                />
            </div>
        </div>
        </>
    )
}

export default MovieHero;