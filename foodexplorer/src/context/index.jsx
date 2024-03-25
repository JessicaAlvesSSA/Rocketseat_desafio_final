import { createContext, useContext, useMemo, useState } from "react";

const DishContext = createContext({});

const DishProvider = ({ children }) => {
  const [dish, setDish] = useState();
  const [admin, setAdmin] = useState(false);

  const value = useMemo(
    () => ({
      dish,
      setDish,
      admin,
      setAdmin,
    }),
    [dish, setDish, admin, setAdmin]
  );

  return <DishContext.Provider value={value}>{children}</DishContext.Provider>;
};

export default DishProvider;

export const useDishContext = () => useContext(DishContext);
