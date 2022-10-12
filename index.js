const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => {
    return {
        type: BUY_CAKE,
    };
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
    }
}



// (previousState, action) => newState

const initialState = {
    numCakes: 10,
    numIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ... state,
                numCakes: state.numCakes - 1
            }

        case BUY_ICECREAM: 
            return {
                ... state,
                numIceCreams: state.numIceCreams - 1
            }
        
        
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();