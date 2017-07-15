import React from 'react';
import {
	View, 
	Image, 
	Dimensions,
	TouchableWithoutFeedback
} from 'react-native';
import {Loop, Body, World} from 'react-game-kit'

import FloppyFish from './FloppyFish';
import EnemyMobs from './mobs';

const {height, width} = Dimensions.get('window');

class Game extends React.Component{

	constructor(p){
		super(p);
		this.state = {
			tick: 1
		}
	}

	componentDidMount(){
		this.floppy = new FloppyFish();
		this.v = setInterval(this.tickUpdate.bind(this), 1000/10);
	}

	tickUpdate(){
		this.setState({tick: this.state.tick+1}, () => {
			console.log(this.state.tick);
		});
	}

	render(){
		if(this.state.tick > 100){
			window.clearInterval(this.v);
		}
		return(
			<TouchableWithoutFeedback style={{flex: 1}} onPress={() => this.floppy.jump()}>
					<View>
							<Image
								style={{position: 'absolute', width, height}}
								source={require('../../assets/ocean.jpeg')}
							/>
							<FloppyFish tick={this.state.tick}/>
							<EnemyMobs tick={this.state.tick}/>
					</View>
				
			</TouchableWithoutFeedback>
		);
	}
}

export default Game;


