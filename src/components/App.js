import React from 'react';
import store, { addRow, pickColor, draw } from '../store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.createNewRow = this.createNewRow.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.draw = this.draw.bind(this);
  }

  createNewRow() {
    store.dispatch(addRow());
    this.setState(store.getState());
  }

  changeColor(event) {
    store.dispatch(pickColor(event.target.value));
    this.setState(store.getState());
  }

  draw(event) {
    console.log(event);
    const cord = event.target.id.split('-');
    const row = cord[0];
    const col = cord[1];
    store.dispatch(draw(row, col));
    this.setState(store.getState());
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id="add-row" onClick={this.createNewRow}>Add a row</button>
          <select onChange={this.changeColor}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <table>
          <tbody>
            {this.state.grid.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((color, cellIndex) => {
                    return (
                      <td 
                        key={`${rowIndex}-${cellIndex}`} 
                        id={`${rowIndex}-${cellIndex}`} 
                        className={color} 
                        onClick={this.draw}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
