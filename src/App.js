import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; // Importer le CSS global
import OneAs from "./OneAs"; // Importer le composant 1as
import TwoAs from "./TwoAs"; // Importer le composant 2as
import ThreeAs from "./ThreeAs"; // Importer le composant 3as

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="animation">Bienvenue sur Apprendre le français</h1>
          <h3 className="animation">
            Site d'apprentissage interactif du lycée Souissi
          </h3>
          <p>
            Voici quelques articles où je parlerai du programme et mettrai à
            jour les cours et les exercices au fur et à mesure.
          </p>
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/1as">1as</Link>
            </li>
            <li>
              <Link to="/2as">2as</Link>
            </li>
            <li>
              <Link to="/3as">3as</Link>
            </li>
          </ul>
        </nav>

        <section className="articles">
          <Routes>
            <Route path="/1as" element={<OneAs />} />
            <Route path="/2as" element={<TwoAs />} />
            <Route path="/3as" element={<ThreeAs />} />
            <Route
              path="/"
              element={
                <>
                  <h2>Choisis ton niveau</h2>
                  <p>Sélectionne un niveau pour voir le programme.</p>

                  {/* Ajout de la vidéo Canva ici */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 0,
                      paddingTop: "56.25%", // Ratio 16:9
                      boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                      marginTop: "1.6em",
                      marginBottom: "0.9em",
                      overflow: "hidden",
                      borderRadius: "8px",
                      willChange: "transform",
                    }}
                  >
                    <iframe
                      loading="lazy"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        border: "none",
                        padding: 0,
                        margin: 0,
                      }}
                      src="https://www.canva.com/design/DAGR6BH_RpY/Y-QiZ4hrmxoDo3-bb8UOPg/watch?embed"
                      allowFullScreen
                      title="Canva Video"
                    ></iframe>
                  </div>

                  <a
                    href="https://www.canva.com/design/DAGR6BH_RpY/Y-QiZ4hrmxoDo3-bb8UOPg/watch?utm_content=DAGR6BH_RpY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir la présentation complète
                  </a>
                </>
              }
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
