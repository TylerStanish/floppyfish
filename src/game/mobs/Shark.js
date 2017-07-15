import React from 'react';
import {Sprite, Body } from 'react-game-kit';

class Shark extends Component{
	
	constructor(p){
		super(p);
		this.state = {
			chomping: false,
		}
	}

	eat(){
		this.setState({chomping: true});
	}

	render(){
		let offset = []
		return(
				<Image
					source={require('../../../assets/mobs/shark.png')}
					style={{height: 100, width: 100}}
				/>
		);
	}
}

export default Shark;