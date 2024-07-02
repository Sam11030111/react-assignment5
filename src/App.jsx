import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function fetchAnime() {
      const response = await fetch(
        "https://shikimori.one/api/animes?limit=50&order=popularity"
      );

      const data = await response.json();

      setAnimes(data);
    }

    fetchAnime();
  }, []);

  return (
    <main className="max-w-7xl mx-auto bg-[#0F1117]">
      <Header />
      <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {animes.map((anime) => (
            <Card key={anime.id} anime={anime} />
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
