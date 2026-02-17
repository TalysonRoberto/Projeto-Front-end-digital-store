import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';

const ProductGallery = ({ produto }) => {
  // Estado da imagem ativa
  const [activeIndex, setActiveIndex] = useState(0);

  const bgColors = ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF'];

  // Imagem grande
  const itemTemplate = (item, options) => {
    return (
      <div
        className="flex align-items-center justify-content-center border-round w-full transition-colors transition-duration-500"
        style={{
          background: bgColors[activeIndex % bgColors.length], // Cor dinâmica aqui
          minHeight: '300px',
        }}
      >
        <img
          src={item}
          alt="produto"
          className="p-4"
          style={{
            objectFit: 'contain',
            width: '100%',
            maxWidth: '700px',
            maxHeight: '450px',
          }}
        />
      </div>
    );
  };

  // Imagens miniatura
  const thumbnailTemplate = (item, options) => {
    const index = options?.index ?? 0;

    return (
      <div
        className="flex align-items-center justify-content-center border-round-sm"
        style={{
          background: bgColors[index % bgColors.length],
          height: '70px',
          width: '100%',
          maxWidth: '85px',
          padding: '5px',
        }}
      >
        <img
          src={item}
          alt="thumb"
          className="w-full h-full"
          style={{ objectFit: 'contain', background: `${bgColors}` }}
        />
      </div>
    );
  };

  return (
    <div className="card custom-gallery w-full">
      <Galleria
        value={produto.imgs}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        numVisible={5}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        showItemNavigators
        showThumbnails={true}
        circular
        className="w-full"
        style={{ maxWidth: '100%', backgroundColor: `${produto.cor}` }}
      />

      <style>{`
        .custom-gallery .p-galleria-item-prev, 
        .custom-gallery .p-galleria-item-next {
            color: #474747;
            background: none;
            z-index: 10;
        }
        /* Borda rosa na miniatura ativa (conforme o print) */
        .custom-gallery .p-galleria-thumbnail-item-current .border-round-sm {
            border: 2px solid #C92071;
            outline-offset: 2px;
        }
        .custom-gallery .p-galleria-thumbnail-container {
            background: none;
            padding: 15px 0;
        }
        .custom-gallery .p-galleria-thumbnail-item {
            padding: 0 5px;
        }
        @media (max-width: 768px) {
            .custom-gallery .p-galleria-item-prev, 
            .custom-gallery .p-galleria-item-next {
                transform: scale(0.7);
            }
        }
      `}</style>
    </div>
  );
};

export default ProductGallery;
