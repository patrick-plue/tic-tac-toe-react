import { useState, useEffect } from 'react';

function Field() {
  return <div className="field"></div>;
}

export default function Board() {
  const [isMarked, setIsMarked] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <div className="board">
      {isMarked.map((field, i1) =>
        field.map((el, i2) => <Field i1={i1} i2={i2} />)
      )}
    </div>
  );
}
