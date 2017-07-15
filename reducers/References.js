const initialState = {
	marginTop: 40
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'setGlobalMarginTop': 
			return {
				...state,
				marginTop: action.payload
			}
		default: return state;
	}
}