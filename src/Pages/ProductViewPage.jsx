import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Componentes/Section';
import ProductCard from '../Componentes/ProductCard';

const ProductViewPage = () => {
  const location = useLocation();
  const { produto } = location.state || {}; // Aqui estão todos os seus dados!

  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <main>
      <Section>
        <div className="p-5">
          <h1>{produto.name}</h1>
          <img src={produto.image} alt={produto.name} />
          <p>{produto.informacao}</p>

          {/* Renderizando os tamanhos */}
          <div className="flex gap-2">
            {produto.tamanhos.map((t) => (
              <span key={t} className="p-2 border-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={[{ text: 'Show More', href: '/Produtos' }]}
      >
        <ProductCard quantidade={4} />
      </Section>
    </main>
  );
};

export default ProductViewPage;
