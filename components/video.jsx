import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ usePara, type }) => {
  const [settrailer, trailer] = useState([]);
  const apireqt = async () => {
    const keyapid = "e42d1016e4345a5e306e5e3ed010d285";
    const apid = await fetch(
      ` https://api.themoviedb.org/3/${type}/${usePara}/videos?api_key=${keyapid}&language=us`
    );
    const dataapid = await apid.json();
    trailer(dataapid.results[0].key);
  };

  useEffect(() => {
    apireqt();
  }, [usePara]);

  const opts = {
    height: "670",
    width: "80%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <YouTube videoId={settrailer} opts={opts} id="trailer"/>
    </>
  );
};

export default VideoPlayer;
