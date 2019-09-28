//Main
import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
//VK UI
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator } from '@vkontakte/vkui';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
//Icons
import Icon28Place from "@vkontakte/icons/dist/28/place";
import Icon28Profile from "@vkontakte/icons/dist/28/profile";
import Icon28Settings from "@vkontakte/icons/dist/28/settings";
//Classes
import Events from "./views/Events";
import Profile from "./views/Profile";
import Settings from "./views/Settings";


class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			activeStory: 'profile'
		};
		this.onStoryChange = this.onStoryChange.bind(this);

		fetch('95.213.38.15:8000', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;odata=verbose",
			},
			body: JSON.stringify({
				"__metadata": { "type": "SP.Data.List4.ListItem" },
			})
		})
		

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
        <Events id="events" />
        <Profile id="profile" />
        <Settings id="settings" />
      </Epic>
    )
  }
}

export default App;
