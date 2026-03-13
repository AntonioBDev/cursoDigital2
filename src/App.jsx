import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoandingPage from "./pages/LoandingPage";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Presentaciones (Activo solo loandigPage) */}
        <Route path="/" element={<LoandingPage />} />

        {/* <Route path="/admin" element={<AdminPanel />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

