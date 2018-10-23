import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Gifty</h1>
        <p>Share your wishes</p>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('index'));
