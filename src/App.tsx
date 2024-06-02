import { Route, Routes } from "react-router-dom";
import AboutPage from "./Containers/AboutPage/AboutPage";
import HomePage from "./Containers/HomePage/HomePage";
import ProjectsPage from "./Containers/ProjectsPage/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
