import React from 'react';
import Gallery from '../Componentes/Gallery';
import Section from '../Componentes/Section';
import Collection from '../Componentes/Collection';
import CollectionCircle from '../Componentes/CollectionCircle';
import ProductCard from '../Componentes/ProductCard';
import Ofertaespecial from '../Componentes/Ofertaespecial';

const HomePage = () => {
  const slideImages = [
    { src: '/produtos/prod11.png' },
    { src: '/produtos/prod9.png' },
    { src: '/produtos/prod15.png' },
    { src: '/produtos/prod10.png' },
    { src: '/produtos/prod8.png' },
    { src: '/produtos/prod7.png' },
    { src: '/produtos/prod5.png' },
    { src: '/produtos/prod16.png' },
  ];

  return (
    <main className="w-full flex-1">
      {/*  Galeria */}
      <Gallery images={slideImages} />

      {/*  Coleção de destaque */}
      <Section title="Coleção de destaque" titleAlign="left">
        <Collection />
      </Section>

      {/*  Coleção em destaque Circle */}
      <Section title="Coleção em destaque" titleAlign="center">
        <CollectionCircle />
      </Section>

      {/*  Produtos em alta */}
      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={[{ text: 'Show More', href: '/Produtos' }]}
      >
        {/* Passando a quantidade apra ser exibido */}
        <ProductCard quantidade={8} />
      </Section>

      {/*  Oferta */}
      <Section color="bg-white">
        <Ofertaespecial />
      </Section>

      {/*Agora ta organizado aaaahhhhh*/}
    </main>
  );
};

export default HomePage;
