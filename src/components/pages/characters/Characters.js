import React, { useState, useEffect } from "react";
import Card from "../../card/Card";
import Modal from "../../modal/Modal";
import api from "../../services/api";

function Characters(props) {
 
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState();
  const [characters, setCharacters] = useState([]);
  const search = props.foundhero;

  useEffect(() => {
    const searchero = async () => {
      if (search === "") {
        const response = await api.get(`/v1/public/characters?`);
        setCharacters(response.data.data.results);
      } else {
        const response = await api.get(
          `/v1/public/characters?nameStartsWith=${search}`
        );
        setCharacters(response.data.data.results);
      }
    };
    searchero().catch(console.error);
  }, [search]);
  function cardClick(index) {
    setOpen(true);
    setPos(index);
  }

  const modalobj = characters[pos];

  return (
    <section className="flex justify-center pt-20 pb-5 px-5" id="characters">
      <div className="container">
        <div className="modalcontainer ">
          {open && (
            <Modal data={modalobj} modalClose={() => setOpen(false)}></Modal>
          )}
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {characters.map((char, index) => {
            return (
              <Card
                key={char.id}
                img={char.thumbnail.path}
                ext={char.thumbnail.extension}
                name={char.name}
                modalOpen={() => cardClick(index)}
                index={index}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Characters;