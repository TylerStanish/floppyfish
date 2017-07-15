const initial = {
	mode: 'menu'
}

export default (state = initial, action) => {
	switch(action.type){
		case 'blabla': 
			return{
				...state,
				blabla: action.payload
			}
		default: return state;
	}
}