import {createSlice} from "@reduxjs/toolkit";
import {defaultQrOptions} from "../../utilities";

export const qrCodeOptionsSlice = createSlice({
    name: 'qrCodeOptions',
    initialState: {
        value: defaultQrOptions,
    },
    reducers: {
        changeData: (state, action) => {
            state.value = {
                ...state.value,
                data : action.payload
            }
        },
        changeLogo: (state, action) => {
            state.value = {
                ...state.value,
                image: action.payload
            }
        },
        changeDotsColor: (state, action) => {
            state.value = {
                ...state.value,
                dotsOptions: {
                    ...state.value.dotsOptions,
                    color: action.payload
                }
            }
        },
        changeDotsShape: (state, action) => {
            state.value = {
                ...state.value,
                dotsOptions: {
                    ...state.value.dotsOptions,
                    type: action.payload
                }
            }
        },
        changeCornerSquareColor: (state, action) => {
            state.value = {
                ...state.value,
                cornersSquareOptions: {
                    ...state.value.cornersSquareOptions,
                    color: action.payload
                }
            }
        },
        changeCornersSquareShape: (state, action) => {
            state.value = {
                ...state.value,
                cornersSquareOptions: {
                    ...state.value.cornersSquareOptions,
                    type: action.payload
                }
            }
        },
        changeCornersDotColor: (state, action) => {
            state.value = {
                ...state.value,
                cornersDotOptions: {
                    ...state.value.cornersDotOptions,
                    color: action.payload
                }
            }
        },
        changeCornersDotType: (state, action) => {
            state.value = {
                ...state.value,
                cornersDotOptions: {
                    ...state.value.cornersDotOptions,
                    type: action.payload
                }
            }
        }
    },
})

export const {changeData, changeLogo, changeDotsColor, changeDotsShape, changeCornerSquareColor, changeCornersSquareShape, changeCornersDotColor, changeCornersDotType} = qrCodeOptionsSlice.actions

export default qrCodeOptionsSlice.reducer

