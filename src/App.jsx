import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';

// Layout e páginas
import PageLayout from './PageLayout';
import HomePage from './Pages/HomePage';
import ProductListingPage from './Pages/ProductListingPage';
import ProductViewPage from './Pages/ProductViewPage';
import Notfound from './Componentes/Notfound';

function App() {
  return (
    <BrowserRouter basename="/Projeto-Front-end-digital-store">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          {/* Páginas */}
          <Route index element={<HomePage />} />
          <Route path="Produtos" element={<ProductListingPage />} />
          <Route path="Visualizar/:id" element={<ProductViewPage />} />

          {/* Not found */}
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
