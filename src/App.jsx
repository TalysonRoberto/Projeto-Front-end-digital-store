import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Rotas
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos PrimeReact
import 'primeicons/primeicons.css'; // Ícones PrimeReact
import 'primeflex/primeflex.css'; // PrimeFlex para utilitários CSS
import 'primeflex/themes/primeone-light.css';
import PageLayout from './PageLayout';
import HomePage from './Pages/HomePage'; // Home
import ProductListingPage from './Pages/ProductListingPage'; // Lista de produtos
import ProductViewPage from './Pages/ProductViewPage'; // Visualiza produtos
import Notfound from './Componentes/Notfound'; // Página não encontrada

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          {/*Páginas*/}
          <Route index element={<HomePage />} />
          <Route path="/Produtos" element={<ProductListingPage />} />
          <Route path="/Visualizar/:id" element={<ProductViewPage />} />
          {/*Notfound*/}
          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
