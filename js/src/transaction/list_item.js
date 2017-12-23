import React from 'react';
import ReactDOM from 'react-dom';

export default class TransactionListItem extends React.Component {
	render() {
		const t = this.props.transaction;
		return <p onClick={() => this.props.onclick(t.id)} className={this.props.selected ? "selected" : ''}>{t.name}</p>;
	}
}
