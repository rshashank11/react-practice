const cakeActions = require("./features/cake/cakeSlice").cakeActions
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions

const store = require("./app/store")

console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.ordered(3))
store.dispatch(iceCreamActions.ordered(5))
store.dispatch(cakeActions.restocked(5))
store.dispatch(iceCreamActions.restocked(3))

unsubscribe()
