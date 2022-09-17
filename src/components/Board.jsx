import { useState, useEffect } from 'react';

function Field({ i1, i2, isMarked, handleClick }) {
  console.log(isMarked);
  function displayMark() {
    if (isMarked[i1][i2] === 1) {
      return <p>x</p>;
    } else if (isMarked[i1][i2] === 2) {
      return <p>o</p>;
    }
  }
  return (
    <div className="field" onClick={() => handleClick(i1, i2)}>
      {displayMark()}
    </div>
  );
}

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
        field.map((el, i2) => (
          <Field i1={i1} i2={i2} isMarked={isMarked} handleClick={setMark} />
        ))
      )}
    </div>
  );
}
