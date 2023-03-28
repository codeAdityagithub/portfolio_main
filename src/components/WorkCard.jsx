import React from "react";

const WorkCard = (props) => {
  const redir = () => {
    if (props.active) {
      window.open(`${props.href}`, "_blank");
    }
  };

  return <div className="work-card" onClick={redir}></div>;
};

export default WorkCard;
