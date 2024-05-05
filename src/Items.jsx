import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function Items({ events, setShowlink, showLink, resultC }) {
  const [index2show, setIndex2show] = useState();
  const items = events.map((v, i) => {
    while (resultC >= i) {
      return (
        <div
          onClick={() => {
            setShowlink(!showLink);
            setIndex2show(i);
          }}
          className="max-w-[1120px] bg-red-200 mx-auto mt-2 z-10 p-[5px]"
          key={i}
        >
          <div className="grid grid-cols-3 items-center ">
            <h1>{v.title}</h1>
            <p>{v.categories[0].title}</p>
            <div>
              <FaPlus className=" float-right" />
            </div>
          </div>
          <div
            className={`bg-red-300 w-[100%] bottom-[0px] text-center text-blue-900 font-bold ease-in-out duration-300 z-[-1] ${
              index2show === i && showLink
                ? "opacity-1 h-[30px]"
                : "opacity-0 h-[0px]"
            }`}
          >
            <a href={v.link}>See More</a>
          </div>
        </div>
      );
    }
  });

  return <>{items}</>;
}

export default Items;
