import React from 'react';

// import { Container } from './styles';

function FormInput({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormInput;
