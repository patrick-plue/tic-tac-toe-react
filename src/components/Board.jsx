import { useState, useEffect } from 'react';

function Field() {
  return <div className="field"></div>;
}

export default function Board() {
  const [isMarked, setIsMarked] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return (
    <div className="board">
      {isMarked.map((field) => (
        <Field />
      ))}
    </div>
  );
}
