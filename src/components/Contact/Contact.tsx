import "./contact.css";
import myPicture from "../../assets/images/me.jpeg";

export const Contact = () => {
  return (
    <section id="contact-container">
      <div id="author-picture">
        <img src={myPicture} alt="" />
      </div>
      <div className="contact-description-container">
        <article className="contact-description">
          <h1>Om mig, Elin</h1>
          <span>
            Du har alltså hittat till min portfolio? Välkommen, kul att ha dig
            här! Passa på att ta en paus, leka lite i gräset och ta en kopp
            kaffe om du vill.
            <br />
            <br />
            Jag är en trettioåring i jakt på min nästa karriärsmöjlighet inom
            frontendutveckling. Till sommaren 2026 är jag examinerad och klar
            att ta itu med React-baserade projekt, TypeScript,
            API-programmering, SCSS med mera och taggad på att lära mig ännu
            mer, både innanför och utanför de kompetenserna.
          </span>
        </article>
        <article className="contact-description">
          <h2>Hör av dig!</h2>
          <div className="contact-details">
            <h4>Mejl</h4>
            <a href="mailto:elin.hjortskull@medieinstitutet.se">
              elin.hjortskull@medieinstitutet.se
            </a>
          </div>
          <div className="contact-details">
            <h4>Telefon</h4>
            <span>070-570 90 55</span>
          </div>
          <div className="contact-details">
            <h4>Github</h4>
            <a href="https://github.com/hjortie">@hjortie</a>
          </div>
          <div className="contact-details">
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/elin-hjortskull-719755193/">
              @Elin Hjortskull
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
