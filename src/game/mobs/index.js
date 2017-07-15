import React from 'react';
import {View} from 'react-native';

class Index extends React.Component{
	
	constructor(p){
		super(p);
		this.state = {

		};
	}

	spawn(){

	}

	renderMobs(){
		let rand = Math.random();
		if(rand > 0.8){
			this.spawn()
		}
	}

	render(){

		// this.props.tick

		return(
			<View>
				{this.renderMobs()}
			</View>
		);
	}
}

export default Index;

