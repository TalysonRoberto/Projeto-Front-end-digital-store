import React from 'react';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const Gallery = ({ images }) => {
  const itemTemplate = (item) => {
    return (
      <div
        className="w-full flex align-items-center"
        style={{ height: '681px', backgroundColor: '#F5F5F5' }}
      >
        {/* Usamos grid-nogutter para remover espaços indesejados nas bordas da grid */}
        <div className="grid grid-nogutter w-full h-full">
          {/* LADO ESQUERDO: 50% da largura (md:col-6) */}
          <div className="col-12 md:col-5 flex align-items-center justify-content-start">
            <div className="pl-4 md:pl-8 lg:pl-8 py-6">
              <span className="font-bold text-sm md:text-base mb-3 block text-yellow-500">
                Melhores ofertas personalizadas
              </span>

              <h1 className="text-4xl md:text-7xl font-bold line-height-1 mb-4 m-0 text-gray-900">
                Queima de <br className="hidden md:block" /> estoque Nike 🔥
              </h1>

              <p className="text-base md:text-xl line-height-3 mb-6 text-gray-700 max-w-30rem">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>

              <Button
                label="Ver Ofertas"
                className="border-none font-bold border-round-lg"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  width: '220px',
                  height: '48px',
                }}
              />
            </div>
          </div>

          {/* LADO DIREITO: 50% da largura (md:col-6) */}
          <div className="col-12 md:col-7 h-full relative overflow-hidden flex align-items-center justify-content-center">
            <img
              src={item.src}
              alt="Nike Banner"
              className="w-full h-full"
              style={{
                objectFit: 'cover', // 'cover' garante que a imagem preencha o fundo sem bordas brancas
                objectPosition: 'center',
              }}
            />

            {/* Ornamento - flutuando apenas sobre a metade da imagem */}
            <img
              src="/Ornament 11.svg"
              alt="decoração"
              className="absolute top-8 right-8 hidden lg:block"
              style={{ width: '120px' }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full gallery-wrapper">
      <Galleria
        value={images}
        numVisible={1}
        item={itemTemplate}
        showThumbnails={false}
        showIndicators
        autoPlay
        transitionInterval={5000}
        style={{ width: '100%' }}
        pt={{
          root: { style: { border: 'none' } },
          content: { style: { border: 'none' } },
          // Centraliza as bolinhas no rodapé do banner
          indicators: { className: 'flex justify-content-center pb-5' },
        }}
      />

      <style>{`
        .gallery-wrapper .p-galleria-indicator button {
            background-color: #CCCCCC !important;
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
            margin: 0 6px;
        }
        .gallery-wrapper .p-highlight button {
            background-color: var(--primary) !important;
        }
        .p-galleria-item-container {
            height: 681px !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
