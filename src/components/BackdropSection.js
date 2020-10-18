import React from 'react';

const BackDrop = ({ activeClass, click }) => (
  <div role="navigation" className={activeClass} onClick={click}></div>
);

export default BackDrop;
