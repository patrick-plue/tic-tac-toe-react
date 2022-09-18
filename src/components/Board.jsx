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

  const [winner, setWinner] = useState('');

  function setMarks(index1, index2) {
    if (winner) return;
    const copyIsMarked = [...isMarked];
    if (
      copyIsMarked[index1][index2] !== 1 &&
      copyIsMarked[index1][index2] !== 2
    ) {
      copyIsMarked[index1][index2] = 1;
      computerPlays(copyIsMarked);
      setIsMarked(copyIsMarked);
    }
  }

  function computerPlays(arr) {
    const round = arr.flat().filter((e) => e === 1).length;
    const r1 = Math.floor(Math.random() * 3);
    const r2 = Math.floor(Math.random() * 3);
    if (arr[r1][r2] === 0) {
      arr[r1][r2] = 2;
    } else if (round <= 4) {
      computerPlays(arr);
    }
    return arr;
  }

  function checkWinner(value) {
    return (
      //horizontal check - if one of the arrays consist of identical numbers
      isMarked.some(
        (arr) =>
          arr.every((e) => e === value) ||
          //vertical check - if every array has an identical number at the same index
          isMarked.every((arr) => arr[0] === value) ||
          isMarked.every((arr) => arr[1] === value) ||
          isMarked.every((arr) => arr[2] === value) ||
          //diagonal check
          (isMarked[0][0] === value &&
            isMarked[1][1] === value &&
            isMarked[2][2] === value) ||
          (isMarked[0][2] === value &&
            isMarked[1][1] === value &&
            isMarked[2][0] === value)
      )
    );
  }

  useEffect(() => {
    //win logic
    if (checkWinner(1)) {
      setWinner('player');
    } else if (checkWinner(2)) {
      setWinner('computer');
    }
  }, [isMarked]);

  const notification = () => {
    if (winner === 'player') {
      return 'board win';
    } else if (winner === 'computer') {
      return 'board loose';
    } else {
      return 'board';
    }
  };

  const restart = () => {
    const copyIsMarked = [...isMarked];
    const resetArray = copyIsMarked.map((arr) => arr.map((el) => (el = 0)));
    setIsMarked(resetArray);
    setWinner('');
  };

  return (
    <div className={notification()}>
      {isMarked.map((field, i1) =>
        field.map((cell, i2) => (
          <Field
            key={crypto.randomUUID()}
            i1={i1}
            i2={i2}
            cell={cell}
            handleClick={setMarks}
          />
        ))
      )}
      <div className="restart">
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
}
