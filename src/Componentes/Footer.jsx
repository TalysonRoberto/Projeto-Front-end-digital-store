import React from 'react';
import Logo from './Logo';
import Informacoes from './Informações';

const Footer = () => {
  const infoLinks = [
    'Sobre Drip Store',
    'Segurança',
    'Wishlist',
    'Blog',
    'Trabalhe conosco',
    'Meus Pedidos',
  ];

  const categoriaLinks = [
    'Camisetas',
    'Calças',
    'Bonés',
    'Headphones',
    'Tênis',
  ];

  return (
    <footer className="bg-gray-900 text-white py-3 px-4 md:py-3 md:px-8 mt-auto">
      <div className="grid grid-nogutter container mx-auto pt-5">
        {/* COLUNA 1: Logo */}
        <div className="col-12 md:col-4 mb-5 md:mb-0 pr-0 md:pr-6">
          <Logo vlogo="footer" />
          <p className="line-height-3 text-gray-300 mb-4 max-w-20rem mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4 mt-6">
            <i className="pi pi-facebook text-xl cursor-pointer hover:text-pink-500 transition-colors"></i>
            <i className="pi pi-instagram text-xl cursor-pointer hover:text-pink-500 transition-colors"></i>
            <i className="pi pi-twitter text-xl cursor-pointer hover:text-pink-500 transition-colors"></i>
          </div>
        </div>

        {/* COLUNA 2: Informação */}
        <Informacoes
          titulo="Informação"
          lista={infoLinks}
          className="col-6 md:col-2 mb-5 md:mb-0"
        />

        {/* COLUNA 3: Categorias */}
        <Informacoes
          titulo="Categorias"
          lista={categoriaLinks}
          className="col-6 md:col-2 mb-5 md:mb-0"
        />

        {/* COLUNA 4: Contato */}
        <div className="col-12 md:col-4">
          <h4 className="text-xl font-bold mb-4">Contato</h4>
          <div className="text-gray-400 flex flex-column gap-4">
            <p className="m-0 line-height-3">
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p className="m-0">(85) 3051-3411</p>
          </div>
        </div>
      </div>

      <div className="border-top-1 border-gray-700 mt-6 pt-4 text-center">
        {/* Pegando ano atual */}
        <p className="text-sm text-gray-500 m-0">
          @ {new Date().getFullYear()} Digital College
        </p>
      </div>
    </footer>
  );
};

export default Footer;
