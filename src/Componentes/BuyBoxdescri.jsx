import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';

const BuyBoxdescri = ({ produto }) => {
  // Estados para seleção do usuário
  const [tamanhoSel, setTamanhoSel] = useState(produto.tamanhos[2]); // Começa com o 41 selecionado
  const [corSel, setCorSel] = useState(produto.cor[0]); // Começa com a primeira cor selecionada

  return (
    <div className="flex flex-column gap-2 text-left w-full">
      {/* Título e Referência */}
      <h1
        className=" text-4xl font-bold m-0 line-height-2"
        style={{ color: 'var(--dark-gray)' }}
      >
        {produto.name}
      </h1>
      <span
        className=" text-sm font-semibold uppercase tracking-widest"
        style={{ color: 'var(--dark-gray-3)' }}
      >
        {produto.ref}
      </span>

      {/* Avaliação */}
      <div className="flex align-items-center gap-2 mb-2">
        <Rating
          value={produto.avaliação}
          readOnly
          cancel={false}
          className="text-yellow-500"
        />
        <div className="bg-yellow-500 text-white border-round px-2 py-1 flex align-items-center gap-1 text-xs font-bold">
          {produto.avaliação.toFixed(1)}{' '}
          <i className="pi pi-star-fill text-xs"></i>
        </div>
      </div>

      {/* Preço */}
      <div className="flex align-items-baseline gap-2 mb-3">
        <span className="text-700 text-xl">R$</span>
        <span
          className=" text-4xl font-bold"
          style={{ color: 'var(--dark-gray-2)' }}
        >
          {produto.priceDiscount
            ? produto.priceDiscount.toString().replace('.', ',')
            : produto.price}
        </span>
        {produto.priceDiscount && (
          <span className="text-400 line-through text-xl ml-2">
            {produto.price.toString().replace('.', ',')}
          </span>
        )}
      </div>

      {/* Descrição */}
      <div className="mb-4">
        <h4 className=" font-bold mb-2" style={{ color: 'var(--light-gray)' }}>
          Descrição do produto
        </h4>
        <p
          className=" line-height-3 m-0 text-base w-full"
          style={{ color: 'var(--dark-gray-2)' }}
        >
          {produto.informacao}
        </p>
      </div>

      {/* Seletor de Tamanho */}
      <div>
        <h4 className=" font-bold mb-2" style={{ color: 'var(--light-gray)' }}>
          Tamanho
        </h4>
        <div className="flex flex-wrap gap-2">
          {produto.tamanhos.map((tamanho) => (
            <div
              key={tamanho}
              onClick={() => setTamanhoSel(tamanho)}
              className={`flex align-items-center justify-content-center w-3rem h-3rem border-1 border-round cursor-pointer font-bold transition-all ${
                tamanhoSel === tamanho
                  ? 'bg-pink-600 border-pink-600 text-white'
                  : 'bg-white border-300 text-700'
              }`}
            >
              {tamanho}
            </div>
          ))}
        </div>
      </div>

      {/* Seletor de Cor */}
      <div className="mb-2">
        <h4 className=" font-bold mb-2" style={{ color: 'var(--light-gray)' }}>
          Cor
        </h4>
        <div className="flex gap-3">
          {produto.cor.map((cor) => (
            <div
              key={cor}
              onClick={() => setCorSel(cor)}
              className={`border-circle w-2rem h-2rem cursor-pointer p-1 border-2 transition-all ${
                corSel === cor ? 'border-pink-600' : 'border-transparent'
              }`}
            >
              <div
                className="w-full h-full border-circle"
                style={{ background: cor }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão de Compra */}
      <Button
        label="COMPRAR"
        className="w-full md:w-13rem py-3 font-bold border-none border-round-lg"
        style={{ backgroundColor: 'var(--warning)', color: 'white' }}
      />
    </div>
  );
};

export default BuyBoxdescri;
