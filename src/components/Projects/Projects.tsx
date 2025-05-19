import "./projects.css";
import theLastTodo from "../../assets/images/the-last-todo.png";
import drinkApp from "../../assets/images/drink-app.png";
import todoList from "../../assets/images/todolist.png";
import webshop from "../../assets/images/webshop.png";
import elinTanker from "../../assets/images/elin-tanker.png";
import apiOmdb from "../../assets/images/API-omdb.png";

export const Projects = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-container">
          <div className="project-container">
            <div className="img-container">
              <img src={theLastTodo} alt="To-do-app med React" />
            </div>
            <p>
              Mitt första React-projekt med Vite - den senaste tolkningen av
              många to-do-appar. Använde även TypeScript och Tailwind CSS.
            </p>
            <div className="link-container">
              <a href="https://github.com/hjortie/the-last-todo/">
                Länk till repo
              </a>
              <a href="https://hjortie.github.io/the-last-todo/">
                Kolla live här!
              </a>
            </div>
          </div>

          <div className="project-container">
            <div className="img-container">
              <img src={drinkApp} alt="API för crud-operationer mot databas" />
            </div>
            <p>
              Ett crud-API byggt med Express och MongoDB. Drinkrecept kan läggas
              till, redigeras och tas bort direkt från frontend. Filtrering och
              sortering av drinkrecepten sker på serversidan.
            </p>
            <div className="link-container">
              <a href="https://github.com/hjortie/crud-api">Länk till repo</a>
            </div>
          </div>
          <div className="project-container">
            <div className="img-container">
              <img src={todoList} alt="To-do-app med vanilla javascript" />
            </div>
            <p>
              Min första to-do-app. Skrevs i vanilla JavaScript med Vite och
              brukar localstorage - jag använder den fortfarande för att hålla
              ordning på grejer.
            </p>
            <div className="link-container">
              <a href="https://github.com/hjortie/to_do_list">Länk till repo</a>
              <a href="https://hjortie.github.io/to_do_list/">
                Kolla live här!
              </a>
            </div>
          </div>
          <div className="project-container">
            <div className="img-container">
              <img src={webshop} alt="Grupparbete webbshop" />
            </div>
            <p>
              En webbshop som byggdes under grupparbete. Dynamisk varukorg där
              innehållet uppdateras live. Vanilla TypeScript hela vägen!
            </p>
            <div className="link-container">
              <a href="https://github.com/hjortie/group_project_webshop/">
                Länk till repo
              </a>
            </div>
          </div>
          <div className="project-container">
            <div className="img-container">
              <img src={elinTanker} alt="Övningsprojekt flexbox" />
            </div>
            <p>Även detta ett tidigt övningsprojekt - här tränades flexbox!</p>
            {/* <!-- <div className="link-container">
            <a href="http://github.com/hjortie/">Länk till repo</a>
            <a href="https://hjortie.github.io/to_do_list/">Kolla live här!</a>
          </div> --> */}
          </div>
          <div className="project-container">
            <div className="img-container">
              <img src={apiOmdb} alt="Omdb-API - fetch-projekt" />
            </div>
            <p>
              Jag har tränat mycket på att hämta data från API:er och rendera
              HTML baserat på datan - här med hjälp av OmDB:s API.
            </p>
            {/* <!-- <div class="link-container">
            <a href="http://github.com/hjortie/">Länk till repo</a>
            <a href="https://hjortie.github.io/to_do_list/">Kolla live här!</a>
          </div> --> */}
          </div>
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
