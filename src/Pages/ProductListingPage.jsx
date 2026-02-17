import React, { useState } from 'react';
import ProductCard from '../Componentes/ProductCard';
import FilterCheckbox from '../Componentes/FilterCheckbox';
import Section from '../Componentes/Section';
import { Dropdown } from 'primereact/dropdown';
import { Sidebar } from 'primereact/sidebar'; // Importação necessária
import { Button } from 'primereact/button'; // Para o ícone de filtro
import { todosProdutos } from '../data/produtos';

const ProductListingPage = () => {
  // FUNÇÕES E VARIÁVEIS
  const [filters, setFilters] = useState({
    marka: [],
    categoria: [],
    genero: [],
    estado: '',
  });
  const [selectedSort, setSelectedSort] = useState('relevantes');
  const [visibleLeft, setVisibleLeft] = useState(false); // Controle do Sidebar Mobile
  const sortOptions = [
    { label: 'mais relevantes', value: 'relevantes' },
    { label: 'menor preço', value: 'menor-preco' },
    { label: 'maior preço', value: 'maior-preco' },
  ];
  const handleFilterChange = (section, value) => {
    setFilters((prev) => {
      if (section === 'estado') return { ...prev, [section]: value };
      const current = prev[section];
      const newValues = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [section]: newValues };
    });
  };
  const produtosFiltrados = todosProdutos.filter((produto) => {
    const partesRef = produto.ref.split(' | ');
    const categoriaProduto = partesRef[0]?.toLowerCase();
    const marcaProduto = partesRef[1]?.toLowerCase();
    const matchMarka =
      filters.marka.length === 0 || filters.marka.includes(marcaProduto);
    const matchCategoria =
      filters.categoria.length === 0 ||
      filters.categoria.includes(categoriaProduto);
    const matchGenero =
      filters.genero.length === 0 ||
      filters.genero.some((g) =>
        produto.name.toLowerCase().includes(g.toLowerCase()),
      );
    return matchMarka && matchCategoria && matchGenero;
  });
  const produtosParaExibir = [...produtosFiltrados].sort((a, b) => {
    const precoA = a.priceDiscount || a.price;
    const precoB = b.priceDiscount || b.price;
    if (selectedSort === 'menor-preco') return precoA - precoB;
    if (selectedSort === 'maior-preco') return precoB - precoA;
    return 0;
  });

  return (
    <div style={{ backgroundColor: '#F9F8FE', minHeight: '100vh' }}>
      {/* Siderbar para tela menor */}
      <Sidebar
        visible={visibleLeft}
        onHide={() => setVisibleLeft(false)}
        className="custom-sidebar w-20rem"
        showCloseIcon={true}
        style={{
          marginTop: '80px',
          height: 'calc(100vh - 80px)',
          borderTop: '1px solid #e5e5e5',
        }}
      >
        <FilterCheckbox filters={filters} onFilterChange={handleFilterChange} />
      </Sidebar>

      {/* Texto e filtro */}
      <div className="px-3 md:px-8 pt-5">
        <div className="flex flex-column md:flex-row justify-content-between align-items-start md:align-items-center gap-3">
          {/*Texto Resultado*/}
          <div className="text-800 md:flex-order-0 flex-order-1">
            <span className="font-bold">Resultados para "Tênis"</span>
            <span className="text-600 ml-1">
              - {produtosParaExibir.length} produtos
            </span>
          </div>

          {/*Filtro relevantes*/}
          <div className="flex align-items-center gap-2 w-full md:w-auto md:flex-order-1 flex-order-0">
            <div
              className="flex align-items-center bg-white border-1 border-round-sm px-3 flex-1 md:flex-none"
              style={{
                borderColor: '#474747',
                height: '50px',
                minWidth: '200px',
              }}
            >
              <span
                className="text-800 font-bold mr-2 hidden md:inline"
                style={{ whiteSpace: 'nowrap', fontSize: '14px' }}
              >
                Ordenar por:
              </span>
              <Dropdown
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.value)}
                options={sortOptions}
                className="w-full border-none shadow-none"
              />
            </div>

            {/* Botao para o filtro na tela menor*/}
            <Button
              icon="pi pi-filter"
              className="md:hidden p-button-secondary"
              style={{
                backgroundColor: 'var(--primary)',
                border: 'none',
                height: '50px',
                width: '50px',
              }}
              onClick={() => setVisibleLeft(true)}
            />
          </div>
        </div>
      </div>

      {/* Sessao filtro geral e produtos */}
      <Section>
        <div className="flex flex-column md:flex-row gap-4 py-5">
          {/* Filtro geral */}
          <aside className="hidden md:block w-20rem flex-shrink-0">
            <FilterCheckbox
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </aside>

          {/* Produtos */}
          <main className="flex-1">
            <ProductCard
              itensFiltrados={produtosParaExibir}
              itemCol="md:col-4"
            />
          </main>
        </div>
      </Section>
    </div>
  );
};

export default ProductListingPage;
