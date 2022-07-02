import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import "./styles/app.css";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<div>uma rota qualquer</div>} />
    </Routes>
  )
}

export default App
