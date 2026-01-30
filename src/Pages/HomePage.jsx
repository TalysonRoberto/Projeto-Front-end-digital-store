import React from 'react';
import Gallery from '../Componentes/Gallery';
import Section from '../Componentes/Section';
import Collection from '../Componentes/Collection';
import CollectionCircle from '../Componentes/CollectionCircle';
import ProductCard from '../Componentes/ProductCard';
import Ofertaespecial from '../Componentes/Ofertaespecial';

const HomePage = () => {
  const slideImages = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' },
    { src: '/home-slide-5.jpeg' },
    { src: '/home-slide-6.jpeg' },
    { src: '/home-slide-7.jpeg' },
    { src: '/home-slide-8.jpeg' },
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

      {/*  Produtos em alta 3 */}
      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={[{ text: 'Show More', href: '/Produtos' }]}
      >
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
