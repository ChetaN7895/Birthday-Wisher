import React from 'react';

const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
      “Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!” <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
