import React, { Component } from 'react'

export default class Posts extends Component {
	state = {
		posts: [
			{
				name: 'Animate Components',
				link: 'https://medium.com/@NTulswani/animate-components-d94f2ebc295f',
			},
			{
				name: 'Making a custom React renderer',
				link: 'https://medium.com/@NTulswani/making-a-custom-react-renderer-f56caac1b61b',
			},
			{
				name: 'Understanding and implementing a garbage collector',
				link: 'https://medium.com/@NTulswani/understanding-and-implementing-a-garbage-collector-a19afb1bc418',
			},
			{
				name: 'Image processing in React',
				link: 'https://medium.com/@NTulswani/image-processing-in-react-a36d5ea0610a',
			},
			{
				name: 'Introducing Redocx',
				link: 'https://medium.com/@NTulswani/introducing-redocx-d1edff227ab2',
			},
			{
				name: 'Terminal in React',
				link: 'https://medium.com/@NTulswani/terminal-in-react-js-85074a3c870a',
			},
			{
				name: 'Tidings - A NLP based news application',
				link: 'https://medium.com/@NTulswani/tidings-a-nlp-based-news-app-9d139abb7cb5',
			},
		],
	}

	displayPosts = () => {
		const { posts } = this.state

		return posts.map((post, index) => {
			return (
				<li key={index}>
					<a href={post.link} target='_blank'>
						{post.name}
					</a>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className='content'>
					<h2>Blog posts</h2>
				</div>
				<ul className='list'>{this.displayPosts()}</ul>
			</div>
		)
	}
}
