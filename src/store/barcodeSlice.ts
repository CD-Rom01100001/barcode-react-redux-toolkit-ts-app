import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  barcodeState: string[];
  textState: string
}
const initialState: InitialStateType = {
  barcodeState: [],
  textState: ''
}

// type ini

const barcodeSlice = createSlice({
  name: 'barcode',
  initialState,
  reducers: {
    outputText: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        alert('Введите данные!')
      }
      else {
        const correctArray: string[] | undefined = 
        action.payload
        .split('\n')
        .map(text => text.replace(/\s/g,''))
        .filter(text => text.length > 0)
      state.barcodeState = correctArray
      }
    },
    clearOutputField: (state, action: PayloadAction<string>): void => {
      state.barcodeState = []
      state.textState = action.payload
    },
    setText: (state, action: PayloadAction<string>) => {
      state.textState = action.payload
    }
  }
})

export const {clearOutputField, outputText, setText} = barcodeSlice.actions
export const barcodeReducer = barcodeSlice.reducer