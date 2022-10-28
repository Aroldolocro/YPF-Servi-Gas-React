import { createContext, useState } from "react";

export const AppConext = createContext();

const ConstAppContext = ({ children }) => {
  /*CONTROLERS*/

  const [Controler1, setControler1] = useState(false);

  return (
    <AppConext.Provider value={{ Controler1, setControler1 }}>
      {children}
    </AppConext.Provider>
  );
};

export default ConstAppContext;
