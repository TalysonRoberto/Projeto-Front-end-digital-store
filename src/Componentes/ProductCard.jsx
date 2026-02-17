import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { todosProdutos as dadosLocais } from '../data/produtos';

const ProductCard = ({ quantidade, itensFiltrados, itemCol = 'md:col-3' }) => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  // Abrir o produto
  const handleCardClick = (produto) => {
    navigate(`/Visualizar/${produto.id}`, { state: { produto } });
  };
  // Pegar a quantidade de item
  useEffect(() => {
    const baseDeDados = itensFiltrados ? itensFiltrados : dadosLocais;
    const dadosParaExibir = quantidade
      ? baseDeDados.slice(0, quantidade)
      : baseDeDados;
    setProdutos(dadosParaExibir);
  }, [quantidade, itensFiltrados]);

  return (
    <div className="grid grid-nogutter">
      {produtos.map((prod) => (
        <div
          key={prod.id}
          className={`col-6 ${itemCol} p-2 flex justify-content-center cursor-pointer`}
          onClick={() => handleCardClick(prod)}
        >
          <div
            className="flex flex-column w-full"
            style={{ maxWidth: '282px' }}
          >
            {/* Quadrado da Imagem */}
            <div
              className="bg-white flex align-items-center justify-content-center relative shadow-1 border-round-sm overflow-hidden"
              style={{ aspectRatio: '1 / 1.1', width: '100%' }}
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full p-3"
                style={{ objectFit: 'contain' }}
              />

              {prod.priceDiscount && (
                <span
                  className="absolute font-bold w-4rem md:w-5rem h-2rem flex align-items-center justify-content-center border-round-3xl text-xs md:text-sm"
                  style={{
                    top: '10px',
                    left: '10px',
                    color: 'var(--dark-gray-2)',
                    backgroundColor: 'var(--yellow-gren)',
                    zIndex: 2,
                  }}
                >
                  {Math.round(100 - (prod.priceDiscount * 100) / prod.price)}%
                  OFF
                </span>
              )}
            </div>

            {/* Informações básicas */}
            <div className="text-left">
              <p className="text-xs font-bold pt-3 m-0 uppercase text-500">
                {prod.category}
              </p>
              <h3 className="font-normal text-base md:text-xl my-1 text-gray-800 overflow-hidden text-overflow-ellipsis white-space-nowrap">
                {prod.name}
              </h3>
              <div className="flex align-items-center gap-2">
                <span
                  className={`font-normal text-lg md:text-xl ${prod.priceDiscount ? 'line-through text-400' : 'text-gray-900 font-bold'}`}
                >
                  ${prod.price}
                </span>
                {prod.priceDiscount && (
                  <span className="font-bold text-lg md:text-xl text-gray-900">
                    ${prod.priceDiscount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
