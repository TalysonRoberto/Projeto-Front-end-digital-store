import React from 'react';
import imgOferta from '../img/sapato-oferta.png';
import { Button } from 'primereact/button';

const Ofertaespecial = () => {
  return (
    <div className="flex flex-column md:flex-row justify-content-center align-items-center gap-4 md:gap-8 py-6 px-3">
      <img
        src={imgOferta}
        alt="oferta"
        className="w-full md:w-auto"
        style={{ maxWidth: '466px' }}
      />

      <div className="w-full md:w-30rem text-left flex flex-column  md:align-items-start">
        <p className="text-pink-600 font-bold m-0">Oferta especial</p>

        <h1 className="text-800 text-4xl md:text-5xl mt-2 mb-3 line-height-2">
          Air Jordan edição de colecionador
        </h1>

        <p className="text-700 mb-4 line-height-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>

        <Button
          label="Ver Oferta"
          className="bg-pink-600 font-medium border-none border-round-lg"
          style={{
            width: '200px',
            height: '48px',
            backgroundColor: 'var(--primary)',
          }}
        />
      </div>
      {/*Aqui ta tranquilo*/}
    </div>
  );
};

export default Ofertaespecial;
