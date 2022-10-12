const redux = require('redux');
const reduxLogger = require('redux-logger');

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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

//const initialState = {
//    numCakes: 10,
//    numIceCreams: 20
//}

const initialCakeState = {
    numCakes: 10,
}

const initialIceCreamState = {
    numIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ... state,
                numCakes: state.numCakes - 1
            }
        default:
            return state;
    }
}


const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
            return {
                ... state,
                numIceCreams: state.numIceCreams - 1
            }
        default:
            return state;
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();