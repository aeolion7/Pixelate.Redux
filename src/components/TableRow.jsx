import React from 'react';

const TableRow = props => {
  const rowIndex = props.rowIndex;
  return (
    <tr key={rowIndex}>
      {props.row.map((color, cellIndex) => {
        return (
          <td
            key={`${rowIndex}-${cellIndex}`}
            id={`${rowIndex}-${cellIndex}`}
            className={color}
            onClick={props.draw}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
