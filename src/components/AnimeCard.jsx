import { BiMessageEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import toast from "react-hot-toast";
import { useAnime } from "../context/animeContext";
import { useNavigate } from "react-router-dom";

export function AnimeCard({ anime }) {
  const { deleteAnime } = useAnime();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>
        Estas seguro que quieres eliminar <strong>{id}</strong>{" "}
        </p>
        <div>
          <button
            onClick={(e) => {
              deleteAnime(id);
              toast.dismiss(t.id);
              window.location.reload();
            }}
          >Aceptar
          </button>
          <button onClick={(e) => toast.dismiss(t.id)}> Cancelar </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="cards-components">
        <h3>{anime.name}</h3>
        <p>{anime.description}</p>

        <div className="button-crud-container">
          <button
            className="button-crud"
            onClick={() => navigate(`/anime/${anime.id}`)}
          >
            <BiMessageEdit className="button-crud-ico__edit" />
          </button>

        <button
          className="button-crud"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(anime.id);
          }}
        >
          <MdDeleteForever className="button-crud-ico__delete" />
        </button>
        <button
            className="button-crud"
            onClick={() => navigate("/anime/seasons")}
          >
            <BsDoorOpen className="button-crud-ico__open" />
          </button>
      </div>
      </div>
    </div>
  );
}
