import { Route, Routes } from "react-router-dom";
import AboutPage from "./Containers/AboutPage/AboutPage";
import HomePage from "./Containers/HomePage/HomePage";
import ProjectsPage from "./Containers/ProjectsPage/ProjectsPage";
import SignUp from "./Containers/SignUp/SignUp";
import StatesForm from "./Containers/StatesForm/StatesForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up/:city" element={<StatesForm />} />
    </Routes>
  );
}

export default App;
