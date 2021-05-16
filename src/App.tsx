import "./styles.css";

import React, { useContext, useRef, useEffect } from "react";

import { PersonContext, PersonContextProvider } from "./PersonContext";

const FirstName: React.FC = () => {
  const { firstName, setFirstName } = useContext(PersonContext);
  const renders = useRef(1);
  useEffect(() => {
    renders.current += 1;
  });
  return (
    <div>
      First Name:
      <input
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      (renders:{renders.current})
    </div>
  );
};

const FamilyName: React.FC = () => {
  const { setFamilyName, familyName } = useContext(PersonContext);
  const renders = useRef(1);
  useEffect(() => {
    renders.current += 1;
  });
  return (
    <div>
      Family Name:
      <input
        value={familyName}
        onChange={(event) => {
          setFamilyName(event.target.value);
        }}
      />
      (renders:{renders.current})
    </div>
  );
};

const NoContext: React.FC = () => {
  const renders = useRef(1);
  useEffect(() => {
    renders.current += 1;
  });
  return <div>Nocontext: (renders:{renders.current})</div>;
};

const App: React.FC = () => (
  <PersonContextProvider>
    <FirstName />
    <FamilyName />
    <NoContext />
  </PersonContextProvider>
);

export default App;
