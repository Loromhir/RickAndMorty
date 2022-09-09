import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import CharacterList from "./CharacterList";
    
    function Home() {
      const [characters, setCharacters] = useState([]);
      const [info, setInfo] = useState({});
      const url = "https://rickandmortyapi.com/api/character";
    
      const fetchCharacters = (url) => {
        axios
          .get(url)
          .then((data) => {
            setCharacters(data.data.results);
            setInfo(data.data.info);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleNextPage = () => {
        fetchCharacters(info.next);
        window.scrollTo(0, 0);
      };
    
      const handlePreviousPage = () => {
        fetchCharacters(info.prev);
        window.scrollTo(0, 0);
      };
    
      useEffect(() => {
        fetchCharacters(url);
      }, []);

  return (
    <>
    <Navbar brand="Rick y Morty App" />

    <div className="container py-5">
      <nav>
        <ul className="pagination justify-content-center">
          {info.prev ? (
            <li className="page-item">
              <button className="page-link" onClick={handlePreviousPage}>
                Anterior
              </button>
            </li>
          ) : null}
          {info.next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNextPage}>
                Siguiente
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>

    <CharacterList characters={characters} />

    <div className="container pb-5">
      <nav>
        <ul className="pagination justify-content-center">
          {info.prev ? (
            <li className="page-item">
              <button className="page-link" onClick={handlePreviousPage}>
              Anterior
              </button>
            </li>
          ) : null}
          {info.next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNextPage}>
              Siguiente
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  </>
);
}
  


export default Home