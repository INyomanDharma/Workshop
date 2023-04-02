import React from 'react';

const Button = ({ tipe, name }) => {
  return (
    <button type="button" className={`btn ${tipe}`}>
      {name}
    </button>
  );
};

export default Button;
