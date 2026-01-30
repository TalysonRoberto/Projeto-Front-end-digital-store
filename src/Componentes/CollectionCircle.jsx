import React from 'react';
import camisa from '../svg/Camisetas.svg';
import calcas from '../svg/Calças.svg';
//import calcas from '../svg/Calças.svg'
import headphone from '../svg/Headphones.svg';
import Tenis from '../svg/Tênis.svg';

const CollectionCircle = () => {
  return (
    <div className="w-full flex justify-content-center overflow-hidden">
      <ul className="flex list-none gap-5 overflow-x-auto white-space-nowrap pb-3 custom-scrollbar sm:6 md:pr-0">
        {/*Camisetas*/}
        <li className="flex flex-column align-items-center flex-shrink-0">
          <div className="bg-white h-6rem w-6rem border-circle flex align-items-center justify-content-center">
            <img src={camisa} alt="Camisetas" />
          </div>
          <p className="text-l font-semibold text-gray-800 m-none">Camisetas</p>
        </li>

        {/*Calças*/}
        <li className="flex flex-column align-items-center flex-shrink-0">
          <div className="bg-white h-6rem w-6rem border-circle flex align-items-center justify-content-center">
            <img src={calcas} alt="Camisetas" />
          </div>
          <p className="text-l font-semibold text-gray-800 m-none">Calças</p>
        </li>

        {/*Bonés*/}
        <li className="flex flex-column align-items-center flex-shrink-0">
          <div className="bg-white h-6rem w-6rem border-circle flex align-items-center justify-content-center">
            <img src={calcas} alt="Camisetas" />
          </div>
          <p className="text-l font-semibold text-gray-800 m-none">Bonés</p>
        </li>

        {/*Headphones*/}
        <li className="flex flex-column align-items-center flex-shrink-0">
          <div className="bg-white  h-6rem w-6rem border-circle flex align-items-center justify-content-center">
            <img src={headphone} alt="Camisetas" className="ml-1" />
          </div>
          <p className="text-l font-semibold text-gray-800 m-none">
            Headphones
          </p>
        </li>

        {/*Tênis*/}
        <li className="flex flex-column align-items-center flex-shrink-0">
          <div className="bg-white  h-6rem w-6rem border-circle flex align-items-center justify-content-center">
            <img src={Tenis} alt="Camisetas" />
          </div>
          <p className="text-l font-semibold text-gray-800 m-none">Tênis</p>
        </li>
      </ul>
    </div>
  );
};

export default CollectionCircle;
