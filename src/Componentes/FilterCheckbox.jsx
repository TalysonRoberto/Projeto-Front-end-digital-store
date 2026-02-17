import React from 'react';

const FilterSection = ({
  title,
  options,
  selected,
  onChange,
  type = 'checkbox',
}) => (
  <div className="mb-4">
    <h4
      className="text-900 font-bold mb-3 text-sm"
      style={{ color: '#474747' }}
    >
      {title}
    </h4>
    <div className="flex flex-column gap-3">
      {options.map((opt) => (
        <div key={opt.value} className="flex align-items-center">
          <input
            type={type}
            id={opt.value}
            name={title}
            checked={
              type === 'checkbox'
                ? selected.includes(opt.value)
                : selected === opt.value
            }
            onChange={() => onChange(opt.value)}
            className="w-1rem h-1rem cursor-pointer"
            style={{ accentColor: '#C92071' }}
          />
          <label
            htmlFor={opt.value}
            className="ml-2 text-600 cursor-pointer text-sm"
          >
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const FilterCheckbox = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 border-round-sm">
      <h3 className="text-900 font-bold mb-3 text-base">Filtrar por</h3>
      <hr className="mb-4 border-100" />

      <FilterSection
        title="Marka"
        options={[
          { label: 'Adidas', value: 'adidas' },
          { label: 'Nike', value: 'nike' },
          { label: 'Puma', value: 'puma' },
          { label: 'Reebok', value: 'reebok' },
        ]}
        selected={filters.marka}
        onChange={(v) => onFilterChange('marka', v)}
      />

      <FilterSection
        title="Categoria"
        options={[
          { label: 'Esporte e lazer', value: 'performance' },
          { label: 'Casual', value: 'casual' },
          { label: 'Corrida', value: 'corrida' },
        ]}
        selected={filters.categoria}
        onChange={(v) => onFilterChange('categoria', v)}
      />

      <FilterSection
        title="Gênero"
        options={[
          { label: 'Masculino', value: 'masculino' },
          { label: 'Feminino', value: 'feminino' },
          { label: 'Unisex', value: 'unisex' },
        ]}
        selected={filters.genero}
        onChange={(v) => onFilterChange('genero', v)}
      />

      <FilterSection
        title="Estado"
        type="radio"
        options={[
          { label: 'Novo', value: 'novo' },
          { label: 'Usado', value: 'usado' },
        ]}
        selected={filters.estado}
        onChange={(v) => onFilterChange('estado', v)}
      />
    </div>
  );
};

export default FilterCheckbox;
