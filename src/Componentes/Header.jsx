import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import Logo from './Logo';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation('');

  const navLinks = [
    { label: 'Home', url: '/' },
    { label: 'Produtos', url: '/Produtos' },
    { label: 'Categorias', url: '/Visualizar' },
    { label: 'Meus Pedidos', url: '/pedidos' },
  ];

  return (
    <header className="w-full bg-white shadow-1 p-3 md:py-6 md:px-8">
      {/*  Logo, pequisa e ação */}
      <div className="flex align-items-center justify-content-between mb-3 md:mb-4 w-full">
        {/*  Menu Hamburguer quando ficar pequeno */}
        <div className="flex md:hidden flex-1">
          <Button
            icon="pi pi-bars"
            className="p-button-text p-0"
            onClick={() => setVisible(!visible)}
            pt={{
              icon: {
                style: { fontSize: '1.5rem', fontWeight: 'bold' },
              },
            }}
            style={{ color: 'var(--dark-gray-2)' }}
          />
        </div>

        {/* Logo */}
        <div className="flex align-items-center justify-content-center md:justify-content-start flex-1 md:flex-none">
          <Logo vlogo="header" />
        </div>

        {/* Barra de pesquisa */}
        <div className="hidden md:flex flex-grow-1 mx-6 px-3">
          <IconField
            iconPosition="right"
            className="w-full flex align-items-center"
          >
            <InputText
              placeholder="Pesquisar produto..."
              className="w-full border-none p-3 shadow-none"
              style={{
                borderRadius: '8px',
                backgroundColor: 'var(--light-gray-3)',
                color: 'var(--dark-gray-3)',
              }}
            />
            <InputIcon className="pi pi-search" />
          </IconField>
        </div>

        {/* Ações */}
        <div className="flex align-items-center justify-content-end gap-3 flex-1">
          {/* Itens Desktop */}
          <a
            href="#"
            className="hidden md:block no-underline border-bottom-1 border-color-secondary pb-1 text-base"
            style={{ color: 'var(--dark-gray-2)' }}
          >
            Cadastre-se
          </a>
          <a
            href="/login"
            className="hidden md:flex align-items-center justify-content-center border-round text-sm font-bold no-underline transition-duration-200"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--white)',
              width: '114px',
              height: '40px',
              borderRadius: '4px',
            }}
          >
            Entrar
          </a>

          {/* Lupa (Mobile) */}
          <i
            className={`pi ${showSearch ? 'pi-times' : 'pi-search'} md:hidden text-xl text-400 ml-2 cursor-pointer`}
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* Carrinho (Sempre visível) */}
          <div className="relative cursor-pointer">
            <i
              className="pi pi-shopping-cart text-2xl"
              style={{ color: 'var(--primary)' }}
            />
          </div>
        </div>
      </div>

      {/* Barra de Busca tela menor */}
      {showSearch && (
        <div className="md:hidden w-full px-3 py-3 absolute left-0 bg-white z-4 shadow-2 animate-duration-200 animate-fadein mt-3">
          <IconField
            iconPosition="right"
            className="w-full flex align-items-center"
          >
            <InputText
              autoFocus // Abre e já foca para o usuário digitar
              placeholder="Pesquisar produto..."
              className="w-full border-none p-3 shadow-none"
              style={{
                borderRadius: '8px',
                backgroundColor: 'var(--light-gray-3)',
                color: 'var(--dark-gray-3)',
              }}
            />
            <InputIcon className="pi pi-search" />
          </IconField>
        </div>
      )}

      {/* Navegação tela grande */}
      <nav className="hidden md:flex gap-4">
        {navLinks.map((link) => {
          // Agora isActive compara a URL atual com a URL do link
          const isActive = location.pathname === link.url;

          return (
            <Link
              key={link.label}
              to={link.url} // Usamos 'to' em vez de 'href' no componente Link
              className="no-underline pb-1 text-base transition-colors transition-duration-200"
              style={{
                color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
                fontWeight: isActive ? 'bold' : 'normal',
                borderBottom: isActive
                  ? '2px solid var(--primary)'
                  : '2px solid transparent',
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Menu menor */}
      {visible && (
        <div
          className="md:hidden w-full bg-white absolute left-0 z-5 p-4 border-gray-100"
          style={{ top: '70px' }} // Ajuste esse valor para a altura exata do seu Header
        >
          <div className="flex flex-column h-full">
            <h3
              className="text-dark-gray font-bold text-base mb-3"
              style={{ color: 'var(--dark-gray-2)' }}
            >
              Páginas
            </h3>

            <div className="flex flex-column gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.url;
                return (
                  <Link
                    key={link.label}
                    to={link.url}
                    onClick={() => setVisible(!visible)}
                    className="no-underline text-base py-1 block"
                    style={{
                      color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
                      fontWeight: isActive ? 'bold' : 'normal',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <div
                        className="mt-1"
                        style={{
                          height: '2px',
                          width: '3rem',
                          backgroundColor: 'var(--primary)',
                        }}
                      ></div>
                    )}
                  </Link>
                );
              })}
            </div>

            <hr
              className="border-top-1 border-gray-200 w-full mt-3 mb-3"
              style={{ opacity: 0.5 }}
            />

            <div className="flex align-items-center gap-4 mb-2">
              <Link
                to="/login"
                onClick={() => setVisible(!visible)}
                className="flex align-items-center justify-content-center border-round text-white font-bold no-underline"
                style={{
                  backgroundColor: 'var(--primary)',
                  width: '155px',
                  height: '40px',
                  fontSize: '14px',
                }}
              >
                Entrar
              </Link>
              <a
                href="#"
                className="no-underline font-medium text-base text-700 border-bottom-1 border-700"
              >
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
