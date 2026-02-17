import React from 'react';

const Informacoes = ({ titulo, lista = [], className }) => {
  return (
    <div className={className}>
      {/* Informaçoes do footer */}
      <h4 className="text-xl font-bold mb-4 text-white">{titulo}</h4>
      <ul className="list-none p-0 m-0 flex flex-column gap-3 text-gray-400">
        {lista.map((item, index) => (
          <li key={index} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Informacoes;
