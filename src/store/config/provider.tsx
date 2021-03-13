import React, { useReducer } from "react";
import { Store as StoreGlobalProps, GlobalContext } from ".";
import authReducer, { showsStore } from "../shows";
import { ShowsAction } from "../shows.interface";

const Provider: React.FC = ({ children }) => {
  // Add Each store reducer here
  const [authState, authDispatch] = useReducer(authReducer, showsStore);

  const triggerDispatches = (action: ShowsAction) => {
    // Put all dispatch here
    const dispatches = [authDispatch];
    for (let i = 0; i < dispatches.length; i += 1) {
      dispatches[i](action);
    }
  };

  const combinedReducers: StoreGlobalProps = {
    // Add state from reducer for each new store
    store: {
      ...authState,
    },
    dispatch: triggerDispatches,
  };

  return <GlobalContext.Provider value={combinedReducers}>{children}</GlobalContext.Provider>;
};

export default Provider;
