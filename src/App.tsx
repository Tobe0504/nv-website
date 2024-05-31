import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Containers/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
