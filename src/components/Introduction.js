import React, { Component } from 'react';

const src =
	'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/p160x160/15977379_1192957947440727_7946653182426456343_n.jpg?oh=395fbd4067b4eeac0a52cd63d76dabaa&oe=59DA75C3';
const twitter = 'https://www.twitter.com/NTulswani';

const styles = {
	top: '-22px',
	position: 'relative',
	padding: '5px',
	color: 'black'
};

export default class Introduction extends Component {
	render() {
		return (
			<div>
				<div className='heading'>
					<a className='username' href={twitter}>
						<img style={{ width: '70px' }} alt='Nitin Tulswani' src={src} />
						<span style={styles}>@NTulswani</span>
					</a>
				</div>
			</div>
		);
	}
}
