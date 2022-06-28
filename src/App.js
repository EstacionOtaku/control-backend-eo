import { HomePage, CategoryForm, NotFoundPage, AnimeForm, SeasonForm, EpisodeForm, } from "./pages";
import { Routes, Route } from "react-router-dom";
import { CategoryProvider } from "./context/categoryContext";
import { AnimeProvider } from "./context/animeContext";
import { SeasonProvider } from "./context/seasonContext";
import { EpisodeProvider } from "./context/episodeContext";
import { Toaster } from "react-hot-toast";
import { AnimesPage } from "./pages/AnimesPage";
import { SeasonPage } from "./pages/SeasonPage";
import { EpisodePage } from "./pages/EpisodePage";


function App() {
  return (
    <div className="App">
      <CategoryProvider>
      <AnimeProvider>
      <SeasonProvider>
        <EpisodeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/new" element={<CategoryForm />} />
          <Route path="/category/:id" element={<CategoryForm />} />
          <Route path="/category/anime" element={<AnimesPage />} />

          <Route path="/anime/new" element={<AnimeForm />} />
          <Route path="/anime/:id" element={<AnimeForm />} />
          <Route path="/anime/seasons" element={<SeasonPage />} />

          <Route path="/season/new" element={<SeasonForm />} />
          <Route path="/season/:id" element={<SeasonForm />} />
          <Route path="/season/episodes" element={<EpisodePage />} />

          <Route path="/episodes/new" element={<EpisodeForm />} />
          <Route path="/episodes/:id" element={<EpisodeForm />} />
          <Route path="/episodes/episodes" element={<EpisodePage />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        </EpisodeProvider>
        </SeasonProvider>
        </AnimeProvider>
        <Toaster />
      </CategoryProvider>

    </div>
  );
}

export default App;
