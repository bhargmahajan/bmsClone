import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiMovie} from "react-icons/bi";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_NBSVfXbjYa32pw",
        amount: 500*100,
        currency: "INR",
        name: "Book My Show",
        description: "Movie purchse",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b466e9f-26b4-4f40-a5ff-7eaa4b314014/dfady0s-54ea7126-3a05-4619-b38f-fb23a2bcb887.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiNDY2ZTlmLTI2YjQtNGY0MC1hNWZmLTdlYWE0YjMxNDAxNFwvZGZhZHkwcy01NGVhNzEyNi0zYTA1LTQ2MTktYjM4Zi1mYjIzYTJiY2I4ODcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G49pFsWPgF1-5CMAl_jXaxiqZEi_EwMmQ3VnM40CkkY",
        handler: () => {
            alert("Payment done")
        },
        theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

const MoviePage = () => {
    return (
        <>
        <MovieHero />
        <div className="my-12 container mx-auto px-4 lg:w-3/5 lg:ml-56">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p>Tiger and Zoya are back - to save the country and their family. This time it`s personal!</p>
            </div>

            <div className="my-8">
                <hr />
            </div>

            <div>
                <div>
                    <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>

                    <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
                        <div className="w-8 h-8">
                            <BiMovie className="w-full h-full"/>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-800 text-lg">Filmy pass</h3>
                            <p className="text-gray-900 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <button onClick={launchRazorPay} class="bg-blue-500 hover:red-700 text-white font-bold py-2 px-4 rounded-full">
                        Book tickets
                    </button>
                    <hr />
                </div>    
            </div>

            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">Crew</h2>
                <div className="flex flex-row items-start gap-10">
                    <div className="flex flex-col gap-1">
                        <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                        className="w-28 h-28 rounded-full"
                        alt="Crew" />
                        <h2 className="text-center">Slaman khan
                        </h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                        className="w-28 h-28 rounded-full" 
                        alt="Crew"/>
                        <h2 className="text-center">Slaman khan
                        </h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                        className="w-28 h-28 rounded-full"
                        alt="Crew" />
                        <h2 className="text-center">Slaman khan
                        </h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                        className="w-28 h-28 rounded-full"
                        alt="Crew" />
                        <h2 className="text-center">Slaman khan
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MoviePage;