import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const Header = () => (
  <header style={styles.header}>
    <h1>UT HUB</h1>

  </header>
);

const Home = () => {
  const cards = [
    {
      title: "Pokémon",
      homepage: "https://pokemon-api.ut-cphb.dk/",
      api: "https://pokemonapi.ut-cphb.dk/api/pokemons",
      //backend: "https://github.com/Umair-230104/PokemonAPIDeployed-Backend",
      //frontend: "https://github.com/Umair-230104/PokemonAPIDeployed-Frontend",
    },
    {
      title: "Atlas",
      homepage: "https://atlas-api.ut-cphb.dk/",
      api: "https://atlasapi.ut-cphb.dk/api/countries",
      //backend: "https://github.com/Umair-230104/AtlasAPIDeployed-Backend",
      //frontend: "https://github.com/Umair-230104/AtlasAPIDeployed-Frontend",
    },
    {
      title: "Invitation",
      homepage: "https://invitation.ut-cphb.dk/",
      api: "Ikke tilgængelig",
      //backend: "https://github.com/Umair-230104/InvitationProjektBackEnd",
      //frontend: "https://github.com/Umair-230104/InvitationProjektFrontEnd",
    },
    {
      title: "Hotel",
      homepage: "Ikke tilgængelig",
      api: "https://hotelapi.ut-cphb.dk/api/hotels",
     //backend: "Ikke tilgængelig",
      //frontend: "Ikke tilgængelig",
    },
    {
      title: "Trip",
      homepage: "https://tripapp.ut-cphb.dk/",
      api: "https://tripapi.cphbusinessapps.dk/api/trips",
      //backend: "Ikke tilgængelig",
      //frontend: "https://github.com/Umair-230104/TripOgGuidesFreTask",
    },
  ];

  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.cardTitle}>{card.title}</h2>
          <div>
            <strong>Homepage:</strong>
            {card.homepage !== "Ikke tilgængelig" ? (
              <button style={styles.buttonSmall} onClick={() => window.open(card.homepage, "_blank")}>Visit Homepage</button>
            ) : (
              <span> Ikke tilgængelig</span>
            )}
          </div>
          <div>
            <strong>API:</strong>
            {card.api !== "Ikke tilgængelig" ? (
              <button style={styles.buttonSmall} onClick={() => window.open(card.api, "_blank")}>Visit API</button>
            ) : (
              <span> Ikke tilgængelig</span>
            )}
          </div>
          <div>
            <strong>Backend GitHub:</strong>
            {card.backend !== "Ikke tilgængelig" ? (
              <button style={styles.buttonSmall} onClick={() => window.open(card.backend, "_blank")}>Visit Backend</button>
            ) : (
              <span> Ikke tilgængelig</span>
            )}
          </div>
          <div>
            <strong>Frontend GitHub:</strong>
            {card.frontend !== "Ikke tilgængelig" ? (
              <button style={styles.buttonSmall} onClick={() => window.open(card.frontend, "_blank")}>Visit Frontend</button>
            ) : (
              <span> Ikke tilgængelig</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
    padding: "1rem",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  buttonSmall: {
    marginTop: "5px",
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
};

export default App;
