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
