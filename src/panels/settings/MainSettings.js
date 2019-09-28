import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator } from '@vkontakte/vkui';

class MainSettings extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Panel id={this.props.id}>
				<PanelHeader>Основные настройки</PanelHeader>
			</Panel>
		);
	}
}
export default MainSettings;
