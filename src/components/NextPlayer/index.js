import React from 'react';

import './styles.css';

const NextPlayer = (props) => {
  const { xIsNext } = props;

  return (
    <>
      <p className="next__player" >Next Player: {xIsNext ? 'X' : 'O'}</p>
    </>
  );
};

export default NextPlayer;
