
const initialState = {
    a: 1
}



const reducer = (state = initialState, action) => {
    console.log("reducerA called with action=", action);

    switch (action.type) {
        case 'ADD':
            return{
                ...state,
                a: state.a+state.a
            }
            break;
        default:
        return {...state}
}

    return {
        ...state
    }
}

export default reducer;