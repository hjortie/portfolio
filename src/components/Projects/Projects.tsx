import "./projects.css";
import theLastTodo from "../../assets/images/the-last-todo.png";
import drinkApp from "../../assets/images/drink-app.png";
import todoList from "../../assets/images/todolist.png";
import webshop from "../../assets/images/webshop.png";
import elinTanker from "../../assets/images/elin-tanker.png";
import apiOmdb from "../../assets/images/API-omdb.png";
import type { Project } from "../../models/Project";

export const Projects = () => {
  const projects: Project[] = [
    {
      name: "To-do-app med React",
      img: theLastTodo,
      description:
        "Mitt första React-projekt med Vite - den senaste tolkningen av många to-do-appar. Använde även TypeScript och Tailwind CSS.",
      repo: "https://github.com/hjortie/the-last-todo/",
      live: "https://hjortie.github.io/the-last-todo/",
    },
    {
      name: "API för crud-operationer mot databas",
      img: drinkApp,
      description:
        "Ett crud-API byggt med Express och MongoDB. Drinkrecept kan läggas till, redigeras och tas bort direkt från frontend. Filtrering och sortering av drinkrecepten sker på serversidan.",
      repo: "https://github.com/hjortie/crud-api",
    },
    {
      name: "To-do-app med vanilla javascript",
      img: todoList,
      description:
        "Min första to-do-app. Skrevs i vanilla JavaScript med Vite och brukar localstorage - jag använder den fortfarande för att hålla ordning på grejer.",
      repo: "https://github.com/hjortie/to_do_list",
      live: "https://hjortie.github.io/to_do_list/",
    },
    {
      name: "Grupparbete webbshop",
      img: webshop,
      description:
        "En webbshop som byggdes under grupparbete. Dynamisk varukorg där innehållet uppdateras live. Vanilla TypeScript hela vägen!",
      repo: "https://github.com/hjortie/group_project_webshop/",
    },
    {
      name: "Övningsprojekt flexbox",
      img: elinTanker,
      description: "Ett tidigt övningsprojekt - här tränades flexbox!",
    },
    {
      name: "Omdb-API - fetch-projekt",
      img: apiOmdb,
      description:
        "Jag har tränat mycket på att hämta data från API:er och rendera HTML baserat på datan - här med hjälp av OmDB:s API.",
    },
  ];
  return (
    <>
      <div className="content-wrapper">
        <section className="content-container">
          {projects.map((p) => (
            <div className="project-container" key={p.name}>
              <div className="img-container">
                <img src={p.img} alt={p.name} />
              </div>
              <p>{p.description}</p>
              {(p.repo || p.live) && (
                <div className="link-container">
                  {p.repo && <a href={p.repo}>Länk till repo</a>}
                  {p.live && <a href={p.live}>Kolla live här!</a>}
                </div>
              )}
            </div>
          ))}
        </section>
        <article className="page-text">
          <span>
            Ett litet urval av skolarbeten och små sidoprojekt jag pysslat med
            de senaste månaderna. Jag har jobbat mycket med TypeScript, både
            backend (API-utveckling) och frontend (dynamisk rendering).
          </span>
        </article>
      </div>
    </>
  );
};
