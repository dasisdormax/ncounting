import React from 'react';
import ReactDOM from 'react-dom';

import EntitySelector from './entity/selector.js';
import UI from './ui/ui.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entityData: {name: "myEntity"},
		};
		this.setEntity = this.setEntity.bind(this);
	}

	setEntity(entityData) {
		this.setState({entityData});
	}

	render() {
		return <div id="app">
			{this.state.entityData == null
				? <EntitySelector setEntity={this.setEntity} />
				: <UI entityData={this.state.entityData} setEntity={this.setEntity} />}
		</div>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("content")
);
