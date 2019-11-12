import React from 'react';

const Proportion = ({ color, proportion }) => {
  return <div className={`proportion theme-${color}`} style={{ width: `${proportion}%` }}></div>;
};

export default Proportion;
