import { useCategories } from "../context/categoryContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CategoryCard } from "../components/CategoryCard";


export function HomePage() {
  const { categories } = useCategories();

  if (categories.length === 0)
    return (
      <div>
        <VscEmptyWindow />
        <h2> No se crearon categorias aún</h2>
      </div>
    );

  return (
    <>
      <h2>Categories</h2>
      <Link to="/category/new">Crear una categoría nueva</Link>
      <div className="cards-container">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </>
  );
}
