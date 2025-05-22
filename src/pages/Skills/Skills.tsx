import { Link } from "react-router";
import type { Tool } from "../../models/Tool";
import "./skills.css";

export const Skills = () => {
  const tools: Tool[] = [
    { name: "Vite", logo: "vite.svg", link: "https://vite.dev/" },
    { name: "React", logo: "react.svg", link: "https://react.dev/" },
    {
      name: "Javascript",
      logo: "javascript-svgrepo-com.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Typescript",
      logo: "typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      logo: "tailwind.svg",
      link: "https://tailwindcss.com/",
    },
    { name: "MongoDB", logo: "mongodb.svg", link: "https://www.mongodb.com/" },

    {
      name: "Postman",
      logo: "postman-icon-svgrepo-com.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      logo: "figma-svgrepo-com.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "SCSS",
      logo: "scss2-svgrepo-com.svg",
      link: "https://sass-lang.com/",
    },
  ];

  return (
    <>
      <main>
        <h2>Verktyg och metoder jag jobbat med</h2>
        <section className="tools-container">
          {tools.map((t) => (
            <div key={t.name} className="tool-container">
              <div className="logo-container">
                <img src={t.logo} alt={t.name} className="logo" />
              </div>
              <Link to={t.link}>
                <h3>{t.name}</h3>
              </Link>
            </div>
          ))}
        </section>
        <h2>Skills jag tagit med mig</h2>
        <section>
          <p>
            Jag kan utveckla ett API med Express.js och kan skapa
            inloggningssidor med cookie-hantering och lösenordskryptering mot en
            databas.
          </p>
          <p>
            Jag kan planera och rita upp wireframes och layouter i Figma, och
            sedan verkställa skisserna till kod. Jag skapar responsiva och
            skalbara hemsidor med god HTML-struktur.
          </p>
          <p>
            Jag har jobbat agilt i grupparbeten och testat på rollen som
            Scrum-master. Jag har jobbat med gitflow och brancher i Github.
          </p>
          <p>
            Jag tycker om att försöka optimera kod och strävar efter torr (DRY)
            och doftfri kod.
          </p>
        </section>
      </main>
    </>
  );
};
