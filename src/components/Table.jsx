import React from 'react';
import TableRow from './TableRow.jsx';

const Table = props => {
  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIndex) => {
          return (
            <TableRow
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              draw={props.draw}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
