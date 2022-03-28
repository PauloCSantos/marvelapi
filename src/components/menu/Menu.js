import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function Menu(props) {
  const [search, setSearch] = useState();
  let navigate = useNavigate()
    
  return (
    <section className="fixed bg-red-600 h-12 w-full">
      <div className="flex justify-center">
        <div className="flex flex-row py-1 px-1 w-full md:w-1/2 lg:w-1/3">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="form-control relative flex-auto min-w-0 block w-full px-2 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Procure um Heroi da Marvel"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              onClick={ () => props.searchero(search)}
              className="btn order-first px-4 py-3 bg-red-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center md:order-none"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="black"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
            <button
              onClick={ () => navigate("/")}
              className="btn  px-2 py-3 bg-red-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="menu"
            >Voltar</button>
        </div>
      </div>
    </section>
  );
}

export default Menu;