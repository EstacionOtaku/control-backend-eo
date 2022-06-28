import { useAnime } from "../context/animeContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AnimeCard } from "../components/AnimeCard";

export function AnimesPage() {
  const { animes } = useAnime();

  if (animes.length === 0)
    return (
      <div>
        <VscEmptyWindow />
        <h2> No se crearon nuevos animes aún</h2>
      </div>
    );

  return (
    <>
      <h2>Animes</h2>
      <Link to="/anime/new">Crear un nuevo anime</Link>
      <div className="cards-container">
        {animes.map((anime) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div>
    </>
  );
}