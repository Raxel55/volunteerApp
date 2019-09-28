import React from 'react';
import PropTypes from 'prop-types';
import { Div, View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator, Header, platform, HeaderButton, IOS  } from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

class EventsList extends React.Component {
	constructor(props){
		super(props);
	}



	render(){

		return(
			<Panel id={this.props.id}>
				<PanelHeader left={<HeaderButton onClick={this.props.onClick} data-panel="eventsList">
    			{platform() === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}>
				Страница мероприятия
				</PanelHeader>
				<Group title="Информация о мероприятии">
					<List>
						<Cell>
							<InfoRow title="Название">
								{this.props.event.name}
							</InfoRow>
						</Cell>
						<Cell>
							<InfoRow title="Описание">
								{this.props.event.fullDescription}
							</InfoRow>
						</Cell>
						<Cell>
							<InfoRow title="Статус">
								{(this.props.event.state) ? "Активно" : "Неактивно"	}
							</InfoRow>
						</Cell>
					</List>
				</Group>
			</Panel>
		);
	}
}
export default EventsList;
