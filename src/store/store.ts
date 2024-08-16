import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { tracksReducers } from "./features/tracksSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      user: userReducer,
      tracks: tracksReducers,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
