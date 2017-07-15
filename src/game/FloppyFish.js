import React from 'react';
import {
	Image, 
	Animated, 
	Dimensions
} from 'react-native';
import {connect} from 'react-redux';

import {Sprite, Body} from 'react-game-kit';

const {height, width} = Dimensions.get('window');

class FloppyFish extends React.Component{
	
	constructor(p){
		super(p);
		this.state = {
			rotation: new Animated.ValueXY(0, 0),
			height: new Animated.Value(100)
		}
	}

	jump(){
		Animated.timing(this.state.height, {
			toValue: this.state.height._value-1000,
		}).start()
		Animated.sequence([
			Animated.timing(this.state.rotation, {
				toValue: {x: -45, y: 0},
				duration: 300
			}),
			Animated.timing(this.state.rotation, {
				toValue: {x: 45, y: 0},
				duration: 300
			})
		]).start();
		console.log('jumping');
	}

	componentWillMount(){
		FloppyFish.prototype.jump = this.jump.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.getHeight();
	}

	getRotation(rot){

		// implement the gravity engine here

		const rotation = rot.x.interpolate({
			inputRange: [-45, 0, 45],
			outputRange: ['-45deg', '0deg', '45deg']
		})
		console.log(rotation)

		return rotation
	}

	getHeight(){
		Animated.timing(this.state.height, {
			toValue: this.state.height._value+100,
		}).start()
	}

	render(){

		let rotate = this.getRotation(this.state.rotation);
		console.log('height: ' + this.state.height._value);

		return(
				<Animated.View
					style={{
						transform: [{rotate}],
						width: 100,
						height: 100,
						position: 'absolute',
						top: this.state.height,
						left: width/10
					}}
				>
					<Image
						source={require('../../assets/mobs/floppyfish.png')}
						style={{flex: 1, height: 100, width: 100}}
					/>
				</Animated.View>
		);
	}
}

export default FloppyFish;


