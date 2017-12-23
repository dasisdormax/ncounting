import React from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends React.Component {
	render() {
		return <div id="app-navigation">
			<ul>
				<li><a href="#">First level entry</a></li>
				<li>
					<a href="#">First level container</a>
					<ul>
						<li><a href="#">Second level entry</a></li>
						<li><a href="#">Second level entry</a></li>
					</ul>
				</li>
			</ul>
			<div id="app-settings">
				<div id="app-settings-header">
					<button className="settings-button" data-apps-slide-toggle="#app-settings-content">Settings</button>
				</div>
				<div id="app-settings-content">
					{/*Your settings in here</React.Comment>*/}
				</div>
			</div>
		</div>;
	}
}
