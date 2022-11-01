import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const ConstAppContext = ({ children }) => {
  /*CONTROLERS*/

  const [Controler1, setControler1] = useState(false);
  const [Controler2, setControler2] = useState(false);

  /*SAVED ON LOCALSTORAGE*/

  const [Quealificated, setQuealificated] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("Quealificated_local_storage");
    if (data !== false) setQuealificated(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "Quealificated_local_storage",
      JSON.stringify(Quealificated)
    );
  }, [Quealificated]);

  return (
    <AppContext.Provider
      value={{
        Controler1,
        setControler1,
        Controler2,
        setControler2,
        Quealificated,
        setQuealificated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ConstAppContext;
