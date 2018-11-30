import React from 'react';
import TableCell from './TableCell.jsx';

const TableRow = props => {
  const rowIndex = props.rowIndex;
  return (
    <tr key={props.key}>
      {props.row.map((color, cellIndex) => {
        return (
          <TableCell
            key={`${rowIndex}-${cellIndex}`}
            draw={props.draw}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            color={color}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
