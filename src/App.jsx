import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InventConference from "./pages/conferences/InventConference";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventConference />} />
        <Route path="/home" element={<Home />} />
        <Route path="/conference/invent-2026" element={<InventConference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;