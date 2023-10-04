import { ordered as cakeOrdered } from "../cake/cakeSlice"

import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=629edc25"

const iceCreamSlice = createSlice({
  name: "ice cream",
  initialState: {
    numOfIceCreams: 20,
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
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--
    })
  },
})

export const { ordered, restocked } = iceCreamSlice.actions
export default iceCreamSlice.reducer
