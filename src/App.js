import { HomePage, CategoryForm, NotFoundPage, AnimeForm, } from "./pages";
import { Routes, Route } from "react-router-dom";
import { CategoryProvider } from "./context/categoryContext";
import { AnimeProvider } from "./context/animeContext";
import { Toaster } from "react-hot-toast";
import { AnimesPage } from "./pages/AnimesPage";
import { SeasonPage } from "./pages/SeasonPage";


function App() {
  return (
    <div className="App">
      <CategoryProvider>
      <AnimeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/new" element={<CategoryForm />} />
          <Route path="/category/:id" element={<CategoryForm />} />
          <Route path="/category/anime" element={<AnimesPage />} />
          <Route path="/anime/new" element={<AnimeForm />} />
          <Route path="/anime/:id" element={<AnimeForm />} />
          <Route path="/anime/season" element={<SeasonPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        </AnimeProvider>
        <Toaster />
      </CategoryProvider>


    
    </div>
  );
}

export default App;
