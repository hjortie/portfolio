import { useState } from "react";
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
        <h1>Go on, touch the grass</h1>
        {flowers.map((f) => (
          <img
            key={f.id}
            className="flower"
            src="/BLUM.svg"
            style={{
              left: f.x,
              top: f.y,
            }}
          />
        ))}
      </section>
    </>
  );
};
