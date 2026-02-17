import React from 'react';
import col1 from '../img/collection-1.png';
import col2 from '../img/collection-2.png';
import col3 from '../img/collection-3.png';

const Collection = () => {
  return (
    <div className="w-full flex flex-column gap-3 align-content-center md:justify-content-center md:flex-row">
      {/*  Collection img 1 */}
      <div
        className="relative border-round-xl overflow-hidden shadow-2 cursor-pointer w-full md:w-25rem h-12rem md:h-15rem"
        style={{ height: '251px' }}
      >
        <img
          src={col1}
          alt="Collection Item 1"
          className="block w-full h-full"
          style={{ objectFit: 'cover' }}
        />
        <span
          className="absolute font-bold w-5rem h-2rem text-center align-content-center border-round-3xl text-sm"
          style={{
            top: '10px',
            left: '15px',
            color: 'var(--dark-gray-2)',
            backgroundColor: 'var(--yellow-gren)',
          }}
        >
          30% OFF
        </span>
        <a
          href=""
          className="absolute bg-white no-underline font-bold py-3 px-5 border-round-lg hover:bg-gray-100 transition-colors shadow-2"
          style={{ bottom: '25px', left: '20px', color: 'var(--primary)' }}
        >
          Comprar
        </a>
      </div>

      {/*  Collection img 2 */}
      <div
        className="relative border-round-xl overflow-hidden shadow-2 cursor-pointer  w-full md:w-25rem h-12rem md:h-15rem"
        style={{ height: '251px' }}
      >
        <img
          src={col2}
          alt="Collection Item 2"
          className="block w-full h-full"
          style={{ objectFit: 'cover' }}
        />
        <span
          className="absolute font-bold w-5rem h-2rem text-center align-content-center border-round-3xl text-sm"
          style={{
            top: '10px',
            left: '15px',
            color: 'var(--dark-gray-2)',
            backgroundColor: 'var(--yellow-gren)',
          }}
        >
          30% OFF
        </span>
        <a
          href=""
          className="absolute bg-white no-underline font-bold py-3 px-5 border-round-lg hover:bg-gray-100 transition-colors shadow-2"
          style={{ bottom: '25px', left: '20px', color: 'var(--primary)' }}
        >
          Comprar
        </a>
      </div>

      {/*  Collection img 3 */}
      <div
        className="relative border-round-xl overflow-hidden shadow-2 cursor-pointer w-full md:w-25rem h-12rem md:h-15rem"
        style={{ height: '251px' }}
      >
        <img
          src={col3}
          alt="Collection Item 2"
          className="block w-full h-full"
          style={{ objectFit: 'cover' }}
        />
        <span
          className="absolute font-bold w-5rem h-2rem text-center align-content-center border-round-3xl text-sm"
          style={{
            top: '10px',
            left: '15px',
            color: 'var(--dark-gray-2)',
            backgroundColor: 'var(--yellow-gren)',
          }}
        >
          30% OFF
        </span>
        <a
          href=""
          className="absolute bg-white no-underline font-bold py-3 px-5 border-round-lg hover:bg-gray-100 transition-colors shadow-2"
          style={{ bottom: '25px', left: '20px', color: 'var(--primary)' }}
        >
          Comprar
        </a>
      </div>
      {/* Ta top */}
    </div>
  );
};

export default Collection;
