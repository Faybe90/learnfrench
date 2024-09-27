import React from "react";

// Composant TwoAs
function TwoAs() {
  return (
    <div>
      {/* CanvaEmbed déplacé en premier */}
      <CanvaEmbed />

      <h2>2as</h2>
      <p>
        Le programme de 2 as comporte des projets divers : <br />
        Exposer pour démontrer un fait : le discours objectivé <br />
        L'argumentation Plaidoyer et Réquisitoire <br />
        <br />
        La narration avec la nouvelle d'anticipation
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

// Composant CanvaEmbed déplacé correctement
function CanvaEmbed() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingTop: "56.25%",
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
        src="https://www.canva.com/design/DAGR4dWdxSk/h05cdWKQt_H5tDb8fzp7sg/view?embed"
        allowFullScreen
        allow="fullscreen"
        title="programme de 2 as"
      ></iframe>
    </div>
  );
}

export default TwoAs;
