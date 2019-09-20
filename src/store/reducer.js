
const initialState = {
    age: 18,
    history: []
}

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'AGE_UP':
            console.log('Age up action dispatched! action=',action);
            var aa = state.age;
            setTimeout(() => {
                console.log("in setTimeout, aa=",aa)
                aa = aa+action.value;
            }, 2000);
            console.log("before return, aa=",aa)
            return {
                ...state,
                age: state.age+action.value,
                // age: aa,
                history: state.history.concat({
                    age:state.age+action.value,
                    key:Date.now()
                })
            }
            break;
        case 'AGE_DOWN':
            console.log('Age down action dispatched! action=',action);
            return {
                ...state,
                age: state.age-action.value,
                history: state.history.concat({
                    age:state.age-action.value,
                    key:Date.now()
                })
            }
            break;
        case 'DEL_AGE':
            console.log("Age delete action dispatched! action=",action);
            return {
                ...state,
                history: state.history.filter((val)=>{
                    return val.key != action.value
                })
            }
            break;
        default:
            console.log('default action dispatched! action=',action)
    }

    return newState;
}

export default reducer;