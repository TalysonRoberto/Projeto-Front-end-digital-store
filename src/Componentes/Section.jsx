import React from 'react';

const Section = ({ title, titleAlign, link, children, color }) => {
  const alignmentClass =
    titleAlign === 'center'
      ? 'justify-content-center'
      : 'justify-content-between';

  const colorsection = color === 'bg-white' ? 'bg-white' : 'surface-100';

  return (
    <section
      className={`px-2 md:px-8 py-5 ${colorsection}`}
      style={{ backgroundColor: '#F9F8FE' }}
    >
      {/* props */}
      <div className={`flex align-items-center mb-4 ${alignmentClass}`}>
        {/* Título */}
        <p className="text-2xl font-bold text-gray-800 m-none">{title}</p>

        {/* Link se tiver */}
        {link && (
          <a
            href={link[0].href}
            className="text-pink-600 no-underline font-medium hover:underline flex align-items-center"
          >
            {link[0].text}
            <i className="pi pi-arrow-right ml-2 text-sm"></i>
          </a>
        )}
      </div>

      {/* children */}
      <div className="flex justify-content-center">{children}</div>
    </section>
  );
};

export default Section;
