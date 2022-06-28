import { BiMessageEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import toast from "react-hot-toast";
import { useEpisodes } from "../context/episodeContext";
import { useNavigate } from "react-router-dom";

export function EpisodeCard({ episode }) {
  const { deleteEpisode } = useEpisodes();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>
          Estas seguro que quieres eliminar  <strong>{id}</strong>
        </p>
        <div>
          <button
            onClick={(e) => {
              deleteEpisode(id);
              toast.dismiss(t.id);
              window.location.reload();
            }}
          >
            aceptar
          </button>
          <button onClick={(e) => toast.dismiss(t.id)}> Cancel </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="cards-components">
        <h3>{episode.name}</h3>
        
        <p>{episode.description}</p>
        <div className="button-crud-container">
          <button
            className="button-crud"
            onClick={() => navigate(`/episodes/${episode.id}`)}
          >
            <BiMessageEdit className="button-crud-ico__edit" />
          </button>
          <button
            className="button-crud"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(episode.id);
            }}
          >
            <MdDeleteForever className="button-crud-ico__delete" />
          </button>
          <button
            className="button-crud"
            onClick={() => navigate("/")}
          >
            <BsDoorOpen className="button-crud-ico__open" />
          </button>
        </div>
      </div>
    </div>
  );
}
