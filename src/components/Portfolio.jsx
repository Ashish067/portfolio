import React from "react";
import Coding from "../assets/coding.svg";

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="bg-[#020617] flex flex-col justify-center">
          <h1 className="text-center text-white text-2xl pt-6 pb-12">
            Portfolio
          </h1>
          <div className="lg:flex lg:justify-around lg:items-center lg:shadow-2xl flex flex-col space-y-4 items-center">
            <div className=" bg-slate-400 w-72 h-96 rounded-lg shadow-xl hover:animate-tiltshaking relative py-2">
              <img src={Coding} alt="picture" className="h-36 w-72" />
              <h1 className="text-center font-bold">To-Do App</h1>
              <p className="w-72 h-32 px-2 my-3 overflow-hidden">
                It is the very first project of my react journey. Basic hooks
                are used and CRUD operation on performed where the users can
                easily add, edit, and delete tasks. I finished this application
                around 1 year ago.
              </p>
              <button className="bg-[#0e2e4e] text-white rounded-xl p-2 hover:bg-[#3e5d7b] absolute left-1/2  transform -translate-x-1/2">
                Read more
              </button>
            </div>
            <div className=" bg-slate-400 w-72 h-96 rounded-lg shadow-xl hover:animate-tiltshaking relative py-2">
              <img src={Coding} alt="picture" className="h-36 w-72" />
              <h1 className="text-center font-bold">Weather App</h1>
              <p className="w-72 h-32 px-2 my-3 overflow-hidden">
                This application is developed by using Open Weather Map api and
                axois in react employing many of the react concepts. Open
                Weather Map api is used to fetch the real time data and display
                the temperature based on the user's search. You will have to
                enter the name of the city and this application will display the
                information such as longitude latitude and temperature of the
                searched city.
              </p>
              <button className="bg-[#0e2e4e] text-white rounded-xl p-2 hover:bg-[#3e5d7b] absolute left-1/2  transform -translate-x-1/2">
                Read more
              </button>
            </div>
            <div className=" bg-slate-400 w-72 h-96 rounded-lg shadow-xl hover:animate-tiltshaking relative py-2">
              <img src={Coding} alt="picture" className="h-36 w-72" />
              <h1 className="text-center font-bold">Dice Game</h1>
              <p className="w-72 h-32 px-2 my-3 overflow-hidden">
                This is the game developed utilizing basic react hooks such as
                useState, useEffect, asynchronous functions and many of the
                react concepts. In this game the player have to simply guess the
                number and roll the dice if the player guess is right the number
                is added if the player guess the wrong number then the player
                will lose 2 points from his score.
              </p>
              <button className="bg-[#0e2e4e] text-white rounded-xl p-2 hover:bg-[#3e5d7b] absolute left-1/2  transform -translate-x-1/2">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
