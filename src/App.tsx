import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { BeyondBasicsPage } from './pages/BeyondBasicsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DifferentialsPage } from './pages/DifferentialsPage.tsx';
import { ClientsPage } from './pages/ClientsPage.tsx';
import { SolutionsPage } from './pages/SolutionsPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alem-do-basico" element={<BeyondBasicsPage />} />
        <Route path="/diferenciais" element={<DifferentialsPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/solucoes" element={<SolutionsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
