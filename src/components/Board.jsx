import { useState, useEffect } from 'react';

//Field
function Field({ i1, i2, cell, handleClick }) {
  function displayMark() {
    if (cell === 1) {
      return <p>x</p>;
    } else if (cell === 2) {
      return <p>o</p>;
    }
  }
  return (
    <div className="field" onClick={() => handleClick(i1, i2)}>
      {displayMark()}
    </div>
  );
}

//Board
export default function Board() {
  const [isMarked, setIsMarked] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  function setMark(index1, index2) {
    const copyIsMarked = [...isMarked];
    copyIsMarked[index1][index2] = 1;
    setIsMarked(copyIsMarked);
  }
  return (
    <div className="board">
      {isMarked.map((field, i1) =>
        field.map((cell, i2) => (
          <Field i1={i1} i2={i2} cell={cell} handleClick={setMark} />
        ))
      )}
    </div>
  );
}
