import React from "react";
import "./App.css"; // Si tu veux appliquer du CSS global

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenue sur Apprendre le français !</h1>
        <p>Voici quelques articles où je parlerai du programme.</p>
      </header>

      <section className="images">
        {/* Ajout des nouvelles images ici */}
        <img src="/images/frenchlogo.png" alt="logo" />
      </section>

      <section className="articles">
        <article>
          <h2>1as</h2>
          <p>
            Le programme de 1 as comporte des projets divers : <br />
            la vulgarisation scientifique <br />
            l'argumentation <br />
            le style journalistique et les interviews <br />
            la narration
          </p>
          <img src="/images/books1.png" alt="1as" />
        </article>

        <article>
          <h2>2as</h2>
          <p>
            Le programme de 2 as comporte des projets divers : <br />
            l'objectivation scientifique <br />
            l'argumentation comme le plaidoyer et le requisitoire <br />
            le theatre <br />
            la narration avec la nouvelle d'anticipation
          </p>
          <img src="/images/books2.png" alt="2as" />
        </article>

        <article>
          <h2>3as</h2>
          <p>
            Le programme de 3 as comporte des projets divers : <br />
            le texte d'Histoire et notamment la guerre d'Algerie <br />
            l'argumentation comment convaincre et persuader <br />
            lancer un appel ou comment pousser les lecteurs a agire <br />
            la narration avec la nouvelle fantastique
          </p>

          <img src="/images/books3.png" alt="3as" />
        </article>
      </section>
    </div>
  );
}

export default App;
