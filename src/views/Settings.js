import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator } from '@vkontakte/vkui';

import MainSettings from "../panels/settings/MainSettings";


class Settings extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<View id={this.props.id} activePanel="mainSettings">
				<MainSettings id="mainSettings" />
			</View>
		);
	}
}

export default Settings;
