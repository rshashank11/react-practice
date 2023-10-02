const redux = require("redux")

const reduxLogger = require("redux-logger") //Middleware

const applyMiddleware = redux.applyMiddleware //Apply middleware

const logger = reduxLogger.createLogger() //Create logger(middleware)


const createStore = redux.createStore
const combineReducers = redux.combineReducers


const produce = require("immer").produce

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCK = "CAKE_RESTOCK"

const ICECREAM_ORDER = "ICECREAM_ORDER"
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK"

const STREET_UPDATE = "STREET_UPDATE"

function orderCake(qty = 1) {  //Action creator
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}
function restockCake(qty = 5) { //Action creator
    return {
        type: CAKE_RESTOCK,
        payload: qty 
    }
}

function orderIceCream(qty = 1) { //Action creator
    return {
        type: ICECREAM_ORDER,
        payload: qty
    }
}
function restockIceCream(qty = 1) { //Action creator
    return {
        type: ICECREAM_RESTOCK,
        payload: qty
    }
}

function updateStreet(street) {
    return {
        type: STREET_UPDATE,
        payload: street
    }
}


const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const initialAddress = {
    name: "Shashank",
    address: {
        house: 47,
        street: "Samruddhi Layout",
        city: "Bengaluru"
    }
}

const cakeReducer = (state = initialCakeState, action) => { //Reducer for Cakes
    switch(action.type) { //Expression : The key value of type of action object
        case CAKE_ORDERED:
            return {
                ...state, //Spreading the object so that it is updated rather than making a new object
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTOCK: 
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            } 
        default:
                return state
    }
}


const iceCreamReducer = (state = initialIceCreamState, action) => { //Reducer for Ice creams
    switch(action.type) { //Expression : The key value of type of action object
        case ICECREAM_ORDER:
            return {
                ...state, //Spreading the object so that it is updated rather than making a new object
                numOfIceCreams: state.numOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCK: 
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            } 
        default:
                return state
    }
}

const addressReducer = (state = initialAddress, action) => {
    switch(action.type) {
        case STREET_UPDATE:
            return produce(state, (draft) => {
                draft.address.street = action.payload
            }
        )
        default:
            return state
    }
}

const rootReducer = combineReducers({cakeReducer, iceCreamReducer, addressReducer})

const store = createStore(rootReducer, applyMiddleware(logger)) //Linking reducer(shopkeeper) to store(cake shop); Adding logger as middleware

console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => {}) //Listener, runs everytime the store gets updated; No listener as Logger(middleware) does the logging of initial, updated states.

// store.dispatch(orderCake(3))
// store.dispatch(restockCake(6))
// store.dispatch(restockCake(6))

// store.dispatch(orderIceCream(5))
// store.dispatch(restockIceCream(15))

store.dispatch(updateStreet("Seegehalli"))

unsubscribe()

// store.dispatch(orderCake()) //This wont work as the listener is unsubscribed
