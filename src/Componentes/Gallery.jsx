import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const Gallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Efeito para criar um autoplay "manual"
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const itemTemplate = (item) => {
    return (
      <div
        className="w-full flex align-items-center"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <div className="grid grid-nogutter w-full h-full lg-min-h-580 flex flex-column md:flex-row">
          {/* Bloco de imagem */}
          <div className="col-12 md:col-7 relative flex align-items-center justify-content-center p-3 md:p-5 flex-order-1 md:flex-order-2">
            <div className="image-container w-full flex justify-content-center align-items-center">
              <img src={item.src} alt="Nike Banner" className="product-image" />
            </div>
            <img
              src="/Ornament 11.svg"
              alt="decoração"
              className="absolute top-0 right-0 hidden lg:block"
              style={{ width: '130px', marginTop: '40px', marginRight: '40px' }}
            />
          </div>

          {/* Bloco de texto */}
          <div className="col-12 md:col-5 flex align-items-center justify-content-center md:justify-content-start text-center md:text-left flex-order-2 md:flex-order-1">
            <div className="px-4 md:pl-8 lg:pl-8 py-4 md:py-6">
              <span className="font-bold text-sm md:text-base mb-2 md:mb-3 block text-pink-600">
                Melhores ofertas personalizadas
              </span>
              <h1 className="text-4xl md:text-7xl font-bold line-height-1 mb-3 m-0 text-gray-900">
                Queima de <br className="hidden md:block" /> estoque Nike 🔥
              </h1>
              <p className="text-base md:text-xl line-height-3 mb-5 text-gray-700 max-w-30rem mx-auto md:mx-0">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <Button
                label="Ver Ofertas"
                className="border-none font-bold border-round-lg w-full md:w-15rem h-3rem"
                style={{ backgroundColor: '#C92071', color: '#FFFFFF' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full gallery-wrapper">
      <Galleria
        value={images}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        numVisible={1}
        item={itemTemplate}
        showThumbnails={false}
        showIndicators
        circular
        autoPlay={false}
        className="w-full"
        pt={{
          root: { style: { border: 'none' } },
          content: { style: { border: 'none' } },
          indicators: { className: 'flex justify-content-center pb-3' },
        }}
      />

      <style>{`
        /* ... Seus estilos CSS permanecem exatamente os mesmos ... */
        .lg-min-h-580 { height: 680px; }
        .image-container { height: 450px; }
        .product-image { height: 100%; width: auto; max-width: 100%; object-fit: contain; }
        .gallery-wrapper .p-galleria-indicator button {
            background-color: #CCCCCC !important;
            width: 10px !important;
            height: 10px !important;
            border-radius: 50% !important;
            margin: 0 4px;
            border: none !important;
        }
        .gallery-wrapper .p-highlight button { background-color: #C92071 !important; }
        @media (max-width: 768px) {
            .lg-min-h-580 { height: auto; }
            .image-container { height: 250px; }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
