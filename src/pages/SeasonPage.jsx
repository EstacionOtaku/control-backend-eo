import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { SeasonCard } from "../components/SeasonCard";
import { useSeasons } from "../context/seasonContext";

export function SeasonPage() {
  const { seasons } = useSeasons();

  if (seasons.length === 0)
    return (
      <div>
        <VscEmptyWindow />
        <h2> No hay temporadas creadas</h2>
      </div>
    );

  return (
    <>
      <h2>Temporadas</h2>
      <Link to="/season/new">Crear una nueva season</Link>
      <div className="cards-container">
        {seasons.map((season) => (
          <SeasonCard season={season} key={season.id} />
        ))}
      </div>
    </>
  );
}