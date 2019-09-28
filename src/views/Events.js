import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator} from '@vkontakte/vkui';

import EventsList from "../panels/events/EventsList";
import EventPage from "../panels/events/EventPage";


class Events extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activePanel:  "eventsList",
			eventPageId: 0,
			exampleEvents : [
				{
					id: 0,
					state: true,
					name: "Помощь собакам из приюта",
					shortDescription: "Нужны волонтеры для помощи в выгуле собак",
					picture: "C:/volunteerApp/public/img/doge.jpg",
					fullDescription: "..."
				},
				{
					id: 1,
					state: true,
					name: "Субботник",
					shortDescription: "Требуются активные граждане для участия в очистке улиц",
					picture: "",
					fullDescription: "..."
				},
				{
					id: 2,
					state: false,
					name: "Помощь музею",
					shortDescription: "Хотите попасть в историю? Тогда приходите и помогите историческому музею!",
					picture: "",
					fullDescription: "..."
				}
			]
		}
	}


	handleClick = (e) => {
		if (e.currentTarget.dataset.panel == "eventPage"){
			this.setState({
				eventPageId: e.currentTarget.dataset.eventpageid,
				activePanel: e.currentTarget.dataset.panel
			});
		}
		else{
			this.setState({
				activePanel: e.currentTarget.dataset.panel
			});
		}
	};

	render() {
		var id = this.state.eventPageId;
		return(
			<View id={this.props.id} activePanel={this.state.activePanel}>
				<EventsList id="eventsList" events={this.state.exampleEvents} onClick={this.handleClick}/>
				<EventPage id="eventPage" event={this.state.exampleEvents[id]} onClick={this.handleClick}/>
			</View>
		);
	}
}

export default Events;
