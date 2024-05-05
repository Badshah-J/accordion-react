import { useEffect, useState } from "react";
import axios from "axios";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FcInfo } from "react-icons/fc";
import Items from "./Items";

function App() {
  const [resultC, setResultC] = useState(20);
  const [showLink, setShowlink] = useState(true);
  const [events, setEvents] = useState([]);
  const getResult = () => {
    axios
      .get("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      // .then((data) => setEvents(data.data.events))
      .then((data) => setEvents(data.data.events))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getResult();
  }, []);
  function countIn() {
    setResultC(resultC + 10);
  }

  return (
    <div id="top" className="max-w-[1024px] mx-auto px-2 ">
      <div className="h-[50px] bg-green-400 px-2 rounded-md flex items-center justify-center font-bold text-4xl">
        NASA
        <FcInfo />
        nfo
      </div>
      <Items
        events={events}
        setShowlink={setShowlink}
        showLink={showLink}
        resultC={resultC}
      />
      <div className="flex justify-between items-center text-2xl bg-red-900 text-white mt-2 p-[6px] rounded-md w-[100%]">
        <button onClick={countIn}>See More</button>
        <button>
          <a href="#top">
            <FaCircleArrowUp />
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
