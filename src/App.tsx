import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { BeyondBasicsPage } from "./pages/BeyondBasicsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alem-do-basico" element={<BeyondBasicsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
