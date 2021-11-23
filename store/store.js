import { configureStore } from '@reduxjs/toolkit'
import qrCodeOptions from "../features/qrCode/qrCodeOptions";

export default configureStore({
    reducer: {
        qrOptions : qrCodeOptions
    },
})