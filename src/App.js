import React, { Component } from 'react';
import Stage from './lib/Stage';
import Circle from './lib/Circle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage>
          <Circle
            position={{ x: 50, y: 50 }}
            radius={50}
            color={"blue"}
            events={[
              { name: "click", handler: () => console.log('toto') },
            ]}
          />
        </Stage>
      </div>
    );
  }
}

export default App;
