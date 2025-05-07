import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import { CardApp } from './components/CardApp';
import { Info } from './components/Info';
import { Button } from 'react-bootstrap';
import { fetchData } from './helpers/axiosHelper';

export const ApiRickApp = () => {
  const [characters, setCharacters] = useState();
  const [character, setCharacter] = useState();
  const [navigate, setNavigate] = useState();
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

  // useEffect xon then y cach
  // useEffect(()=>{
  //     axios.get(url)
  //         .then((response)=> {
  //             setCharacters(response.data.results);
  //             setCharacter(response.data.results[0]);
  //             setNavigate(response.data.info);
  //         })
  //         .catch((error)=>console.log(error))
  // }, [url]);

  //useEffect con async/await  EL CALLBACK DEL USEFEFECT NO PUEDE SER SER ASYNC

  // useEffect(()=>{
  //     const fetchData = async()=>{
  //         try{
  //             let res = await axios.get(url);
  //             setCharacters(res.data.results);
  //             setCharacter(res.data.results[0]);
  //             setNavigate(res.data.info);
  //         }catch(error){
  //             console.log(error);
  //         }
  //     }

  //     fetchData()
  // }, [url])

  //useEffect con helper
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetchData(url);
        setCharacters(res.data.results);
        setCharacter(res.data.results[0]);
        setNavigate(res.data.info);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [url]);

  const changeCharacter = (char) => setCharacter(char);

  return (
    <div>
      <h1>ApiRickApp</h1>
      <hr />
      <section>
        <h2>Info del personaje X</h2>
        <Info dataInfo={character} />
      </section>
      <section>
        <div className="d-flex justify-content-center gap-5">
          {navigate?.prev && (
            <Button onClick={() => setUrl(navigate?.prev)}>Anterior</Button>
          )}

          <h3>personajes total: {navigate?.count}</h3>

          {navigate?.next && (
            <Button onClick={() => setUrl(navigate?.next)}>Siguiente</Button>
          )}
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {characters?.map((elem) => {
            return (
              <CardApp
                data={elem}
                key={elem.id}
                changeCharacter={changeCharacter}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
