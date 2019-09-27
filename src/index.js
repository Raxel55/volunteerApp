import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon28Place from "@vkontakte/icons/dist/28/place"
import Icon28Profile from "@vkontakte/icons/dist/28/profile"
import Icon28Settings from "@vkontakte/icons/dist/28/settings"


class Example extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'profile'
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }

  render () {

    return (
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'events'}
            data-story="events"
            text="Мероприятия"
          ><Icon28Place /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'profile'}
            data-story="profile"
            text="Профиль"
          ><Icon28Profile /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'settings'}
            data-story="settings"
            label=""
            text="Настройки"
          ><Icon28Settings /></TabbarItem>
        </Tabbar>
      }>
        <View id="events" activePanel="events">
          <Panel id="events">
            <PanelHeader>Мероприятия</PanelHeader>
          </Panel>
        </View>
        <View id="profile" activePanel="profile">
			<Panel id="profile">
				<PanelHeader>Профиль</PanelHeader>
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
		</View>
        <View id="settings" activePanel="settings">
          <Panel id="settings">
            <PanelHeader>Настройки</PanelHeader>
          </Panel>
        </View>
      </Epic>
    )
  }
}


ReactDOM.render(<Example />, document.getElementById('root'));
