import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, Input, FormLayoutGroup, Select, Link, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class Example extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			personaldata: {
				activeStory: 'profile',
				email: '',
				phone: '',
				purpose: '',
				surname: '',
				name: '',
				lastname: '',
				ocupation: '',
				languages: '',
				expirience: '',
				child_volunteering: '',
				skills: '',
				expectations: '',
				medical_problems: '',
				interesting_projects: '',
				clothing_size: '',
				food: '',
				news_subscription: ''
			}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange (e) {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}

	render () {

		return (
			<View id="registration" activePanel="registration">
			<Panel id="registration">
				<PanelHeader>Регистрация</PanelHeader>
				<FormLayout>
					<Input name="surname" top="Фамилия" onChange={this.onFieldChange} />
					<Input name="name" top="Имя" onChange={this.onFieldChange} />
					<Input name="secondname" top="Отчество" onChange={this.onFieldChange} />
					<Input type="email" top="E-mail" name="email" onChange={this.onFieldChange} />
					<Input type="phone" top="Телефон" name="phone" onChange={this.onFieldChange} />
					<Input name="ocupation" top="Место учебы или работы" onChange={this.onFieldChange} />
					<Input name="languages" top="Какими иностранными языками вы владете? (Перечислите через запятую и укажите уровень владения или оставьте поле пустым)" onChange={this.onFieldChange} />
					<Input name="expirience" top="Есть ли у вас опыт волонтерства? Если есть, то опишите его. Если нет - это не страшно)" onChange={this.onFieldChange} />
					<Input name="child_volunteering" top="Есть ли у вас опыт работы с детьми? Если есть, то опишите его" onChange={this.onFieldChange} />
					<Input name="skills" top="Какие у вас есть полезные для музея дополнительные навыки? (возможно, вы прекрасно фотографируете или умеете красиво и профессионально говорить со сцены, напишите об этом!)" onChange={this.onFieldChange} />
					<Input name="expectations" top="Какие ожидания у вас от волонтерства в проектах музея? Что волонтерство может дать лично вам?" onChange={this.onFieldChange} />
					<Input name="medical_problems" top="Есть ли у Вас медицинские противопоказания, аллергия, в т.ч. на животных?" onChange={this.onFieldChange} />

					<Input name="interesting_projects" top="Почему Вам интересно сотрудничать с Политехническим музеем?" onChange={this.onFieldChange} />

					<Select name="clothing_size" top="Размер одежды" placeholder="Выберите размер" onChange={this.onFieldChange}>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
					</Select>

					<Select name="food" top="Есть ли у вас предпочтения в еде?" placeholder="Выберите свой вариант" onChange={this.onFieldChange}>
						<option value="Всеядный">Я ем все</option>
						<option value="Вегетарианец">Вегетарианец</option>
						<option value="Пескетарианец">Пескетарианец</option>
					</Select>

					<Select name="news_subscription" top="Вы хотите получать новости от нашего музея?" placeholder="Выберите ответ" onChange={this.onFieldChange}>
						<option value="True">Да</option>
						<option value="False">Нет</option>
					</Select>
					<Button type="submit" size="xl">Зарегистрироваться</Button>
				</FormLayout>

				<Group title="Информация из массива">
					{this.state['email']}
					{this.state['phone']}
					{this.state['surname']}
					{this.state['name']}
					{this.state['secondname']}
					{this.state['ocupation']}
					{this.state['languages']}
					{this.state['expirience']}
					{this.state['child_volunteering']}
					{this.state['clothing_size']}
					{this.state['food']}
					{this.state['news_subscription']}
				</Group>
			</Panel>
			</View>
		)
	}
}


ReactDOM.render(<Example />, document.getElementById('root'));
