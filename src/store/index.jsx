import React, { useReducer, createContext } from "react";

const intialState = {
  popular: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POPULAR":
      return { popular: action.payload.popular };
    default:
      return state;
  }
};

//global state importすることで各componentで使用しることもできる
export const Store = createContext({
  globalState: intialState,
  setGlobalState: () => null
});

const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, intialState);
  return (
    <>
      <Store.Provider value={{ globalState, setGlobalState }}>
        {children}
      </Store.Provider>
    </>
  );
};

export default StoreProvider;
