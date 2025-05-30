import { useState } from "react";
import blum from "./../../assets/BLUM.svg";
import "./home.css";

type Flower = {
  id: number;
  x: number;
  y: number;
};

export const Home = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newFlower: Flower = {
      id: nextId,
      x: e.pageX,
      y: e.pageY,
    };

    setFlowers([...flowers, newFlower]);
    setNextId((id) => id + 1);
  };

  return (
    <>
      <section id="grass" className="grass-container" onClick={handleClick}>
        <h1>Go on, touch the grass*</h1>
        {flowers.map((f) => (
          <img
            key={f.id}
            className="flower"
            src={blum}
            style={{
              left: f.x,
              top: f.y,
            }}
          />
        ))}
        <span>
          *För oss som är kroniskt online är "touch grass" ett uttryck för att
          logga ut - det här är bara en kort virtuell utloggning, en liten
          mikropaus om man behöver den.
        </span>
      </section>
    </>
  );
};
