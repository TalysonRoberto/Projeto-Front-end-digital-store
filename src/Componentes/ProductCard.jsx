import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ quantidade }) => {
  // Lista de procutos
  const todosProdutos = [
    {
      id: 1,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 2,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 3,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 4,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 5,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,

      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 6,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,

      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 7,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 8,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 9,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 10,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 11,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 12,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 13,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 14,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 15,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
    {
      id: 16,
      name: 'Nome do produto 1',
      image: '/produtos/K-Swiss V8 - Masculino.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis',
      informacao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tamanhos: ['39', '40', '41', '42'],
      avaliação: 4,
      imgs: [
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
        '/produtos/K-Swiss V8 - Masculino.png',
      ],
    },
  ];

  // Verifica a quantidade de itens solicitado
  const produtosExibidos = quantidade
    ? todosProdutos.slice(0, quantidade)
    : todosProdutos;

  // Passa os parâmetros para a página de mais informações do produto
  const navigate = useNavigate();
  const handleCardClick = (produto) => {
    navigate(`/Visualizar/${produto.id}`, { state: { produto } });
  };

  return (
    <div className="grid grid-nogutter justify-content-center">
      {produtosExibidos.map((prod) => (
        <div
          key={prod.id}
          className="col-6 md:col-3 p-2 flex justify-content-center cursor-pointer"
          onClick={() => handleCardClick(prod)}
        >
          <div
            className="flex flex-column w-full"
            style={{ maxWidth: '282px' }}
          >
            {/* Quadrado card */}
            <div
              className="bg-white flex align-items-center justify-content-center relative shadow-1 border-round-sm overflow-hidden"
              style={{
                aspectRatio: '1 / 1.1',
                width: '100%',
              }}
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full p-3"
                style={{ objectFit: 'contain' }}
              />

              {/* Descontinho */}
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

            {/* Informações basica*/}
            <div className="text-left">
              {/* Categoria */}
              <p className="text-xs font-bold pt-3 m-0 uppercase text-500">
                {prod.category}
              </p>
              {/* Nome */}
              <h3 className="font-normal text-base md:text-xl my-1 text-gray-800 overflow-hidden text-overflow-ellipsis white-space-nowrap">
                {prod.name}
              </h3>
              {/* Preço */}
              <div className="flex align-items-center gap-2">
                <span
                  className={`font-normal text-lg md:text-xl ${prod.priceDiscount ? 'line-through text-400' : 'text-gray-900 font-bold'}`}
                >
                  ${prod.price}
                </span>
                {/* Desconto */}
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
      {/* haha eu sou sensacional */}
    </div>
  );
};

export default ProductCard;
