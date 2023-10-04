const redux = require("redux")
const createStore = redux.createStore
const axios = require("axios")
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").default

const initialState = {
  loading: false,
  users: [],
  error: "",
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        const errorMessage = error.message
        dispatch(fetchUsersFailure(error))
      })
  }
}

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_USERS_SUCCESS: {
      return {
        error: "",
        loading: false,
        users: action.payload,
      }
    }
    case FETCH_USERS_FAILURE: {
      return {
        users: [],
        loading: false,
        error: action.payload,
      }
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers())
