import { HomePage, CategoryForm, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { CategoryProvider } from "./context/categoryContext";
import { Toaster } from "react-hot-toast";
import { AnimesPage } from "./pages/AnimesPage";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/new" element={<CategoryForm />} />
          <Route path="/category/:id" element={<CategoryForm />} />
          <Route path="/category/anime" element={<AnimesPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </CategoryProvider>
    </div>
  );
}

export default App;
