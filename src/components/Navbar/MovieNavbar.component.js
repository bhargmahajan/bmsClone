import React from "react";
import { BiSearch, BiChevronDown, BiMenu, BiShareAlt } from "react-icons/bi";

const NavSm =() => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It all Starts Here!</h3>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full" />
            </div>
        </div>
        </>
    )
};

const NavLg =() =>{
    return (
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2">
                <div className="w-40 h-12">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b466e9f-26b4-4f40-a5ff-7eaa4b314014/dfady0s-54ea7126-3a05-4619-b38f-fb23a2bcb887.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiNDY2ZTlmLTI2YjQtNGY0MC1hNWZmLTdlYWE0YjMxNDAxNFwvZGZhZHkwcy01NGVhNzEyNi0zYTA1LTQ2MTktYjM4Zi1mYjIzYTJiY2I4ODcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G49pFsWPgF1-5CMAl_jXaxiqZEi_EwMmQ3VnM40CkkY" alt="logo" className="w-full h-full" />
                </div>
                <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                    <BiSearch />
                    <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, sports and activities" />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                    Bhubaneswar
                    <BiChevronDown/>
                </span>
                <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
                    Sign in
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
        </div>
    )
};

const MovieNavbar =() => {
    return (
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-xsm lg:relative bg-gray-800 px-4 py-2">
            <div className="md:hidden">{
                <NavSm />
            }</div>
            <div className="hidden lg:hidden md:block">{
                <NavSm />
            }</div>
            <div className="hidden lg:flex">{
                <NavLg />
            }</div>
        </nav>
        </>
    )
};

export default MovieNavbar;