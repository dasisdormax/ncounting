import React from 'react';
import ReactDOM from 'react-dom';
import TransactionListItem from './listItem.js';
import TransactionDetails from './details.js';

export default class TransactionList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{	id: "389141aa-0822-4dc9-9a1a-1e778ff6c4cc",
					name: "My First transaction",
					debit: 20, },
				{	id: "989abf45-cfe0-40e6-ad10-845400ea5f55",
					name: "2nd tränsaction",
					credit: 50, },
				{	id: "70e0af8b-cc4c-461f-8c85-77e19dfa6193",
					name: "TRANSACTION NUMBER THREE",
					debit: 44.2, }
			],
			selectedItem: null
		};
		this.onListItemClick = this.onListItemClick.bind(this);
	}

	onListItemClick(id) {
		this.setState({selectedItem: this.state.items.find((t) => t.id == id)});
	}

	render() {
		return <div className="content">
			<div>
				{this.state.items.map(
					(t) => <TransactionListItem key={t.id} transaction={t} onclick={this.onListItemClick}/>
				)}
			</div>
			<TransactionDetails transaction={this.state.selectedItem} />
		</div>;
	}
}
