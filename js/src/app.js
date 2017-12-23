import React from 'react';
import ReactDOM from 'react-dom';

import EntitySelector from './entity/selector.js';
import UI from './ui/ui.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entityInfo: null,
		};
		this.setEntity = this.setEntity.bind(this);
	}

	setEntity(entityInfo) {
		this.setState({entityInfo});
	}

	render() {
		return <div id="app">
			{this.state.entityInfo == null
				? <EntitySelector setEntity={this.setEntity} />
			    : <UI entityInfo={this.state.entityInfo} setEntity={this.setEntity} />}
		</div>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("content")
);
