import React from 'react';
import notfoulnd from '../Img/notfoulnd.gif';
import { useLocation } from 'react-router-dom';

const Notfound = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <div
      className="flex flex-column md:flex-row px-3 md:px-8 py-5 justify-content-center align-items-center"
      style={{ backgroundColor: '#edebf8' }}
    >
      {/* Container do Texto */}
      <div className="w-full md:w-30rem">
        {/* Barra superior */}
        <div
          className="border-round-top w-full h-2rem font-bold flex align-items-center px-4 gap-2"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          <span className="w-1rem h-1rem border-circle bg-pink-100"></span>
          <span className="w-1rem h-1rem border-circle bg-pink-100"></span>
          <span className="w-1rem h-1rem border-circle bg-pink-100"></span>
        </div>

        {/* Conteúdo do Card */}
        <div
          className="border-round-bottom w-full min-h-20rem font-bold flex flex-column justify-content-center px-4 md:px-5 py-4"
          style={{ backgroundColor: '#FFF' }}
        >
          <h1 className="text-pink-600 text-3xl md:text-4xl">
            Ooops! Error 404 <i className="pi pi-wrench text-2xl"></i>
          </h1>
          <h2 className="text-pink-600 text-xl md:text-2xl mt-2">
            Página '{page}' não encontrada ou indisponível
          </h2>
          <p className="py-4 text-600 font-normal line-height-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil
            quos quaerat ipsam totam! Repellendus, nemo suscipit cum id, beatae
            ipsam perspiciatis laboriosam vitae sed omnis maiores mollitia.
          </p>
        </div>
      </div>

      {/* Img ... fica ai um meme kkkk*/}
      <img
        src={notfoulnd}
        alt="notfound"
        className="mt-5 md:mt-0 md:ml-5 w-12rem h-12rem md:w-15rem md:h-15rem"
      />
    </div>
  );
};

export default Notfound;
