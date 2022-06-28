import { useEpisodes } from "../context/episodeContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { EpisodeCard } from "../components/EpisodeCard";


export function EpisodePage() {
  const { episodes } = useEpisodes();

  if (episodes.length === 0)
    return (
      <div>
        <VscEmptyWindow />
        <h2> No se añadieron episodios aún</h2>
      </div>
    );

  return (
    <>
      <h2>Episodios</h2>
      <Link to="/episodes/new">Agrega un episodio nuevo</Link>
      <div className="cards-container">
        {episodes.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
      </div>
    </>
  );
}
