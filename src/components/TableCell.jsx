import React from 'react';

const TableCell = props => {
  return (
    <td
      key={props.key}
      id={`${props.rowIndex}-${props.cellIndex}`}
      className={props.color}
      onClick={props.draw}
    />
  );
};

export default TableCell;
