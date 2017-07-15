import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Main from './main';
import Game from './game';

class Index extends React.Component{
	render(){
		return(
			<Router>
				<Scene key='root'>
					<Scene key='main' component={Main}/>
					<Scene key='game' hideNavBar component={Game}/>
				</Scene>
			</Router>
		);
	}
}

export default Index;


