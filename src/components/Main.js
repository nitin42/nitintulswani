import React, { Component } from 'react'
import Introduction from './Introduction'
import Projects from './Projects'
import Message from './Message'
import Posts from './Posts'

export default class Main extends Component {
	render() {
		return (
			<div>
				<Introduction />
				<Projects />
				<Posts />
				<Message />
			</div>
		)
	}
}
