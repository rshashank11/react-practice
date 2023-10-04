const { cakeActions } = require("../cake/cakeSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const iceCreamSlice = createSlice({
  name: "ice cream",
  initialState: {
    numOfIceCreams: 10,
  },
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--
    })
  },
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
