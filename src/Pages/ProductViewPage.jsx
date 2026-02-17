import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Componentes/Section';
import ProductCard from '../Componentes/ProductCard';
import BuyBox from '../Componentes/BuyBox';
import BuyBoxdescri from '../Componentes/BuyBoxdescri';

const ProductViewPage = () => {
  const location = useLocation();
  const { produto } = location.state || {}; // Aqui esta todos os dados

  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <main>
      <Section>
        <div>
          {/*Simulando caminho (estou pegando so o nome do produto o resto esta sendo texto)*/}
          <p
            style={{
              marginTop: '-40px',
              marginBottom: '30px',
              color: 'var(--dark-gray-2)',
            }}
          >
            Home / Produto / Tênis / {produto.name}
          </p>
          <div className="flex gap-5 w-full flex-wrap md:flex-nowrap">
            <div className="col-12 md:col-7 p-0">
              {/* Images e galeria */}
              <BuyBox produto={produto} />
            </div>
            <div className="col-12 md:col-5 p-0">
              {/* Descriçoes do produto */}
              <BuyBoxdescri produto={produto} />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={[{ text: 'Show More', href: '/Produtos' }]}
      >
        {/* Passando novamente a quantidade de produto a ser exibido*/}
        <ProductCard quantidade={4} />
      </Section>
    </main>
  );
};

export default ProductViewPage;
