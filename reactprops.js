import React from 'react';
import ReactDOM from 'react-dom';
class Car extends React.Component {
	render() {
		return <h2>I am a {this.props.brand}!</h2>
	
}
const myelement = <Car brand="BMW" />;
ReactDOM.render(myelement, document.getElementById('root'));