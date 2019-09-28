import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator } from '@vkontakte/vkui';

class VolunteerProfile extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Panel id={this.props.id}>
				<PanelHeader>Профиль волонтера</PanelHeader>
				<Group title="Рейтинг дока 2">
					5000
				</Group>
				<Group title="Информация о пользователе">
					<List>
						<Cell>
							<InfoRow title="Дата рождения">
								30 января 1993
							</InfoRow>
						</Cell>
						<Cell>
							<InfoRow title="Родной город">
								Ереван
							</InfoRow>
						</Cell>
						<Cell>
							<InfoRow title="Место работы">
								Команда ВКонтакте
							</InfoRow>
						</Cell>
					</List>
				</Group>
			</Panel>
		);
	}
}
export default VolunteerProfile;
