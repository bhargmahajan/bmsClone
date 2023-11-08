import React from "react";
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = ()=> {
    return (
        <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-8/12">
                <h2 className="text-2xl font-bold mb-4">Plays in Jaipur</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00374750-bhwkzgseew-portrait.jpg"
                        title="Ye Hai Bombay Meri Jaan"
                        subtitle="Hindi"
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00374747-mvkrtpvftj-portrait.jpg"
                        title="Yaar Banaa Buddy - A Play By Nadira Zaheer Babbar"
                        subtitle="Hindi"
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00373061-cfpqsahzxj-portrait.jpg"
                        title="Pashmina"
                        subtitle="Hindi"
                        />
                    </div>
                    
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00371424-qqrnaaqkka-portrait.jpg"
                        title="Sanhita Manch'23 Festival - Bagadbilla"
                        subtitle="Hindi"
                        />
                    </div>
                    
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00373061-cfpqsahzxj-portrait.jpg"
                        title="Pashmina"
                        subtitle="Mini Audi 1-Rajasthan International Centre: Jaipur"
                        />
                    </div>
                    
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00373061-cfpqsahzxj-portrait.jpg"
                        title="Pashmina"
                        subtitle="Mini Audi 1-Rajasthan International Centre: Jaipur"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00373061-cfpqsahzxj-portrait.jpg"
                        title="Pashmina"
                        subtitle="Mini Audi 1-Rajasthan International Centre: Jaipur"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                        <Poster 
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00373061-cfpqsahzxj-portrait.jpg"
                        title="Pashmina"
                        subtitle="Mini Audi 1-Rajasthan International Centre: Jaipur"
                        />
                    </div>
                </div>
                </div>

                <div className="lg:w-1/4">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div>
                    <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                    <PlaysFilter title="Language" tags={["Tamil","Kannada","Hindi"]} />
                    <PlaysFilter title="Categories" tags={["Theatre", "Storytelling"]} />
                    <PlaysFilter title="Genres" tags={["Drama","Classic","Comedy"]} />
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Plays;