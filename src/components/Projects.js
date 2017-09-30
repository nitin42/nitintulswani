import React, { Component } from 'react'

export default class Projects extends Component {
	state = {
		projects: [
			{
				name: 'Animate Components',
				link: 'https://github.com/nitin42/animate-components',
				description: '✨ Elemental components for doing animations in React',
			},
			{
				name: 'Mathsteps',
				link: 'https://github.com/socraticorg/mathsteps',
				description: '➗ Step by steps math solutions for everyone',
			},
			{
				name: 'Tidings',
				link: 'https://github.com/nitin42/Tidings',
				description: '📰  A NLP based news application',
			},
			{
				name: 'Terminal in React',
				link: 'https://github.com/nitin42/terminal-in-react',
				description: '👨‍💻 A component that renders a terminal',
			},
			{
				name: 'glamorous-primitives',
				link: 'https://github.com/nitin42/glamorous-primitives',
				description: '💄 Style primitive interfaces with glamorous',
			},
			{
				name: 'vscode-glamorous',
				link: 'https://github.com/nitin42/vscode-glamorous',
				description: '💄 glamorous snippets for vscode editor',
			},
			{
				name: 'Redocx',
				link: 'https://github.com/nitin42/redocx',
				description: '📄 Create word documents with React',
			},
			{
				name: 'react-imgpro',
				link: 'https://github.com/nitin42/react-imgpro',
				description: '📷 Image Processing Component for React',
			},
			{
				name: 'glam-atom',
				link: 'https://github.com/nitin42/glam-atom',
				description: '💄 glamorous snippets for Atom editor',
			},
			{
				name: 'Python Automation',
				link: 'https://github.com/nitin42/Python-Automation',
				description: 'Collection of Python projects',
			},
			{
				name: 'Making a custom React renderer',
				link: 'https://github.com/nitin42/Making-a-custom-React-renderer',
				description: 'Tutorial on how to build a custom React renderer',
			},
			{
				name: 'stylus-in-react',
				link: 'https://github.com/nitin42/stylus-in-react',
				description: 'Stylus in JavaScript',
			},
			{
				name: 'glamorous-redocx',
				link: 'https://github.com/nitin42/glamorous-redocx',
				description: '💄  Style Redocx components with glamorous',
			},
			{
				name: 'glamorous-stylus',
				link: 'https://github.com/nitin42/glamorous-stylus',
				description: '💄 Use glamorous with Stylus',
			},
		],
	}

	showMyProjects = () => {
		const { projects } = this.state

		return projects.map((project, index) => {
			return (
				<li key={index} id='project'>
					<a href={project.link} target='_blank' rel='noopener noreferrer'>
						{project.name}
					</a>
					<span className='tooltiptext'>{project.description}</span>
				</li>
			)
		})
	}

	heading = () => (
		<div>
			<div className='content'>
				<h2>Open Source Work & Projects </h2>
			</div>
		</div>
	)

	displayProjects = () => (
		<div>
			{this.heading()}
			<ul className='list'>{this.showMyProjects()}</ul>
		</div>
	)

	render() {
		return this.displayProjects()
	}
}
