import React from "react";
import { useNavigate } from "react-router-dom";

function Modal(props) {
  let navigate = useNavigate();
  const name = props.data.hasOwnProperty("name")
    ? props.data.name
    : props.data.title;
  const path = props.data.thumbnail.path;
  const extension = props.data.thumbnail.extension;
  const ifdescription = props.data.description;
  const ncomics = props.data.hasOwnProperty("comics")
    ? props.data.comics.available
    : props.data.pageCount;
  let description;
  if (ifdescription === "") {
    description = "Character without description";
  } else {
    description = ifdescription;
  }
  return ( 
    <div className="fixed inset-0 z-50 over">
      <div className="absolute w-full h-screen bg-black opacity-80"></div>
      <div className="flex items-center justify-center text-center h-screen ">
        <div
          className="inline-block relative overflow-hidden transform transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex flex-col h-screen rounded-lg shadow-lg bg-white justify-between pt-2 md:h-3/5 ">
            <div className="flex flex-col items-center overflow-y-auto md:flex-row">
              <div className="flex  w-1/4">
                <img
                  src={`${path}.${extension}`}
                  alt=""
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-2xl font-bold mb-4">Biography</h2>
                  <p className="uppercase text-red-600 font-bold mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                      />
                    </svg>
                    {name}
                  </p>
                  <p className="text-gray-500 mb-6 ">{description}</p>
                  <p className="text-gray-500 mb-6">
                    {`Number of ${
                      props.data.hasOwnProperty("comics") ? "comics" : "pages"
                    }: ${ncomics}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 mb-1 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
              {props.data.hasOwnProperty("name") && (
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => navigate(`/comics/${props.data.id}`)}
                >
                  See all Comics
                </button>
              )}
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => props.modalClose()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;