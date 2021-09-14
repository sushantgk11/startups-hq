import React from "react";

export default function Card(props) {
  return (
    <div className="App bg-black-900 m-4 w-screen relative overflow-hidden flex justify-center items-center">
      <div className="container h-10 w-3/5 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border-2 hover:border-red-800 border-opacity-60 hover:border-opacity-90 border-l-0 border-t-0 hover:border-l-0 hover:border-t-0 backdrop-filter backdrop-blur-xl text-yellow-200 font-bold text-1xl">
        <span>{props.postTitle}</span>
      </div>
    </div>
  );
}