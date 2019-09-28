import React from 'react';
import PropTypes from 'prop-types';
import { Div, View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator, Header, Button } from '@vkontakte/vkui';

function Event(props){
	return(
		<Group align="center">
		<Button level="outline" onClick={props.onClick} data-eventpageid={props.eventpageid} data-panel={props.panel}>
        <Cell>{props.name}</Cell>
		<Separator />
		<InfoRow title="Описание">
            {props.shortDescription}
        </InfoRow>
		</Button>
		</Group>
	);
}

class EventsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: this.props.events,
			onClick: this.props.onClick
		}
	}


	render(){
		const list = this.state.items.map((item) => {
			return <Event name={item.name} shortDescription={item.shortDescription}
			 onClick={this.state.onClick} eventpageid={item.id} panel="eventPage"/>;
		});

		return(
			<Panel id={this.props.id}>
				<PanelHeader>Мероприятия сейчас</PanelHeader>
				{list}
			</Panel>
		);
	}
}
export default EventsList;
