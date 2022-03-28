import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../card/Card";
import Modal from "../../modal/Modal";
import api from "../../services/api";

function Comics() {
  let { comicid } = useParams();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState();
  const [comics, setComics] = useState([]);
  
  useEffect(() => {
    const searchero = async () => {
      const response = await api.get(`/v1/public/characters/${comicid}/comics`);
      setComics(response.data.data.results);
    };
    searchero().catch(console.error);
  }, [comicid]);
  function cardClick(index) {
    setOpen(true);
    setPos(index);
  }

  const modalobj = comics[pos];

  return (
    <section className="flex justify-center pt-20 pb-5 px-5" id="comics">
      <div className="container">
        <div className="modalcontainer ">
          {open && (
            <Modal data={modalobj} modalClose={() => setOpen(false)}></Modal>
          )}
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {comics.map((comic, index) => {
            return (
              <Card
                key={comic.id}
                img={comic.thumbnail.path}
                ext={comic.thumbnail.extension}
                name={comic.title}
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

export default Comics;