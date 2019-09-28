import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, Group, List, Cell, Epic, Tabbar, TabbarItem, InfoRow, Separator } from '@vkontakte/vkui';

import VolunteerProfile from "../panels/profile/VolunteerProfile";


class Profile extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<View id={this.props.id} activePanel="volunteerProfile">
				<VolunteerProfile id="volunteerProfile" />
			</View>
		);
	}
}

export default Profile;
