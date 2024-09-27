import React from "react";

function ThreeAs() {
  return (
    <div>
      {/* Canva Embed placé au début */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "100%",
          paddingBottom: "0",
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
          src="https://www.canva.com/design/DAGR5-S4yMk/4dV3Ak7iKXkADrmIt_gUsg/watch?embed"
          allowFullScreen
          allow="fullscreen"
          title="3as - français"
        ></iframe>
      </div>

      {/* Contenu texte et images après */}
      <h2>3as</h2>
      <p>
        Le programme de 3 as comporte des projets divers : <br />
        Le texte d'Histoire et notamment la guerre d'Algérie <br />
        L'argumentation : comment convaincre et persuader <br />
        Lancer un appel : comment pousser les lecteurs à agir <br />
        La narration avec la nouvelle fantastique
      </p>
      <img
        src="/images/books3.png"
        alt="3as"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
      <h2>Les prépositions</h2>
      <p>Exercices pour s'entraîner et réviser les bases</p>
      <img
        src="/images/prep1.png"
        alt="prep1"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
      <img
        src="/images/prep2.png"
        alt="prep2"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export default ThreeAs;
