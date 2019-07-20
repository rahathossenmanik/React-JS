import React from 'react';
import ReactDOM from 'react-dom';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'Write your texts...'
    };
  }
  render() {
    return (
      <form>
      <textarea value={this.state.description} />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));