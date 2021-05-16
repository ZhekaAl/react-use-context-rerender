import React, { createContext, useState } from "react";

export const PersonContext = createContext({
  familyName: "",
  firstName: "",
  setFirstName: (n) => {},
  setFamilyName: (n) => {}
});

export const PersonContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");

  return (
    <PersonContext.Provider
      value={{
        familyName,
        firstName,
        setFamilyName,
        setFirstName
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
