import { useState, createContext } from "react";

export let AppContext = createContext();

const ContextTualApi = (props) => {
  const [navHeight, setnavHeight] = useState("umesh");
  return (
    <AppContext.Provider value={{ navHeight }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextTualApi;
