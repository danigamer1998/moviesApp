import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cloading from "./Loadeing";
import Movies from "./CardMoviesRow";
import PerfectScrollbar from "react-perfect-scrollbar"

const Indexx = ({ api, type }) => {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const apireqt = async () => {
  const apid = await fetch(api);
  const apiData = await apid.json();
  setdata(apiData.results.slice(0,6));
   setload(true);
  };

  useEffect(() => {
    apireqt();
  }, [data]);
  return (
    <div className="movies">
      {load ? (
        data.map((dataMovie) => {
          const{media_type,id}=dataMovie
          return(
          <Link
            to={`/${media_type ? media_type : type}/${
              id
            }`}
            key={id}
          >
            <Movies daata={dataMovie} />
          </Link>
        )})
      ) : (
        <Cloading />
      )}
    </div>
  );
};

export default Indexx;
