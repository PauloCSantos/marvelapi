import React from "react";

function Card(props) {
  const pos = props.index
  return (
    <div className="flex flex-wrap justify-center max-w-80 max-h-auto">
      <div className="rounded-lg shadow-lg bg-white" >
        <img
          onClick={() => props.modalOpen(pos)}
          className="object-cover w-80 h-56 md:h-64"
          src={`${props.img}.${props.ext}`}
          alt=""
        />
        <div className="p-2 ">
          <h5 className="text-gray-900 text-center text-base font-medium  ">
            {props.name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
