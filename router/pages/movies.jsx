import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieCard from "../../components/CardMovie";

const Movie = ({ setmovi, setadd, }) => {
  const [used, sed] = useState([]);
  const usePara = useParams().id;
  const [gener, setgener] = useState([]);
  const [loading, setlod] = useState(true);

  const navigate = useNavigate();

  const apireqt = async () => {
    const keyapid = "e42d1016e4345a5e306e5e3ed010d285";
    const apid = await fetch(
      ` https://api.themoviedb.org/3/movie/${usePara}?api_key=${keyapid}&language=es`
    );
    if (apid.status == 404) {
      navigate("/");
    }
    const dataapid = await apid.json();

    setlod(false);
    setgener(dataapid.genres);
    sed(dataapid);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    apireqt();
    scrollToTop();
  }, [usePara]);

  
 
  return (
    <>
      {!loading ? (
        <MovieCard
          used={used}
          gener={gener}
          usePara={usePara}
          setmovi={setmovi}
          type="movie"
          setadd={setadd}
        />
      ) : (
        <p>loadig</p>
      )}
    </>
  );
};

export default Movie;
