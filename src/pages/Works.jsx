import React, { useState } from "react";

import WorkCard from "../components/WorkCard";

const Works = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <div
        className={active ? "ion-icon apart" : "ion-icon"}
        onClick={() => {
          setActive(!active);
        }}
      >
        +
      </div>

      <div className="works-container">
        <WorkCard
          active={active}
          href="https://aditya008.pythonanywhere.com/login"
        />
        <WorkCard active={active} href="https://workconnect.onrender.com/" />
        <WorkCard
          active={active}
          href="https://github.com/codeAdityagithub/Restaurant-Project"
        />
      </div>
    </div>
  );
};

export default Works;
