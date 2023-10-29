import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./ducks/authDuck"
import createSagaMiddleware from "redux-saga"
import authSaga from "./sagas/authSaga"

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: { auth: authReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
    devTools: import.meta.env.VITE_APP_CODE == "PRODUCTION",
  })
    
sagaMiddleware.run(authSaga)

export default store