import axios from "axios";
import React, { useEffect, useState } from "react";

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../components/config/TempPosters.config";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  console.log({popularMovies});

  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-12">
        <h1 className="text-2xl font-bold text-gray-800">
            The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
    </div>

    <div className="bg-gray-500 py-12 ">
      <div className="container mx-auto">
        <div className="flex">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
          alt="premiere" className="w-full h-full" />
        </div>

        <div className="px-16">
        <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand new releases every Friday" isDark={true}/>
        </div>
      </div>
    </div>
    </div>

    <div className="container mx-auto px-16">
      <PosterSlider 
      images={popularMovies}
      title="Online streaming Events"
      isDark={false}
      />
    </div>
    </>
  );
};

export default HomePage;