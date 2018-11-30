import React from 'react';

const Table = props => {
  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((color, cellIndex) => {
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
        })}
      </tbody>
    </table>
  );
};

export default Table;
