import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Rotas
import PageLayout from './PageLayout'
import HomePage from './Pages/HomePage' // Home
import ProductListingPage from './Pages/ProductListingPage' // Lista de produtos
import ProductViewPage from './Pages/ProductViewPage' // Visualiza produtos
import Notfound from './Componentes/Notfound' // Página não encontrada



function App() {

  return (
   <BrowserRouter>
		<Routes>

			<Route path="/" element={<PageLayout/>}>
        {/*Páginas*/}
				<Route index element={<HomePage />} />
        <Route path="/Produtos" element={<ProductListingPage/>} />
				<Route path="/Visualizar" element={<ProductViewPage/>} />
			</Route>

			{/*Notfound*/}
			<Route path="*/" element={<Notfound/>}/> 

		</Routes>
	</BrowserRouter>
  )
}

export default App
