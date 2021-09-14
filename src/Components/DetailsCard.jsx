import React from "react";

export default function DetailsCard(props) {
  return (
    <div className="App bg-black-900 relative flex justify-center pt-12">
      <div className="container h-96  w-1/2 p-12 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border-2 hover:border-red-800 border-opacity-60 hover:border-opacity-90 border-l-0 border-t-0 hover:border-l-0 hover:border-t-0 backdrop-filter backdrop-blur-xl text-white">
        <span className="text-yellow-400 font-bold text-2xl">ID:</span>&nbsp;&nbsp;
        <span className="text-white-400 font-bold text-2xl">#{props.id}</span>
        &nbsp;&nbsp;
        <span className="text-yellow-400 font-bold text-2xl">Name: </span>
        <span className="text-white-400 font-bold text-2xl">{props.postName}</span>
        <br />
        <span className="text-yellow-400 font-bold text-2xl">Email: </span>
        <span className="text-white-400 font-bold text-2xl">{props.email}</span>
        <br />
        <br />
        <u>
          <span className="text-yellow-400 font-bold text-3xl">Details: </span>
        </u>
        <br />
        <br />
        <p className="text-white-400 font-bold text-1xl px-10">{props.body}</p>
      </div>
    </div>
  );
}