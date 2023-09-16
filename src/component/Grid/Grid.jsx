import "./Grid.css";
import logo from "../../assets/download.png";
import { useState } from "react";

const Grid = () => {
    const [squares, setSquares] = useState(Array(9).fill('blue'));

  const handleClick = (index) => {
    const updatedSquares = [...squares];
    updatedSquares[index] = 'red';
    setSquares(updatedSquares);
  };

  const handleLastSquareClick = () => {
    setSquares(Array(9).fill('blue'));
  };

  return (
    <div className="Grid">
      <div className="GridColorDiv"/>
      <div className="ForFlex">
      <img src={logo} className="Logo" />
      <div className="GridAll Logo">
      {squares.map((color, index) => (
          <div
            key={index}
            className={`GridOne ${color=='red' && "GridOneRed"}`}
            onClick={() => {
              handleClick(index);
              if (index === 8) {
                handleLastSquareClick();
              }
            }}
          />
        ))}
    </div>
    </div>
    </div>
  );
};

export default Grid;
