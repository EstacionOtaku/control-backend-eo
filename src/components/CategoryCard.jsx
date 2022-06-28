import { BiMessageEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import toast from "react-hot-toast";
import { useCategories } from "../context/categoryContext";
import { useNavigate } from "react-router-dom";

export function CategoryCard({ category }) {
  const { deleteCategory } = useCategories();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>
          Estas seguro que quieres eliminar <strong>{id}</strong>
        </p>
        <div>
          <button
            onClick={(e) => {
              deleteCategory(id);
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
        <h3>{category.name}</h3>
        <img
          className="card-image"
          src={category.image}
          alt={"image" + category.name}
        />
        <p>{category.description}</p>
        <div className="button-crud-container">
          <button
            className="button-crud"
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <BiMessageEdit className="button-crud-ico__edit" />
          </button>
          <button
            className="button-crud"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(category.id);
            }}
          >
            <MdDeleteForever className="button-crud-ico__delete" />
          </button>
          <button
            className="button-crud"
            onClick={() => navigate("/category/anime")}
          >
            <BsDoorOpen className="button-crud-ico__open" />
          </button>
        </div>
      </div>
    </div>
  );
}
