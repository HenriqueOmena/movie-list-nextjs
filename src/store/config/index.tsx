import { createContext } from "react";
import { showsStore } from "../shows";
import { Shows } from "../shows.interface";

export interface Store {
  store: Shows;
  dispatch(obj: any): void;
}

export const initialState: Store = {
  store: {
    ...showsStore,
  },
  dispatch() {
    return null;
  },
};

export const GlobalContext = createContext<Store>(initialState);
