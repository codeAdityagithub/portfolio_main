import React, { useEffect, useRef, useState } from "react";
import ContactForm from "../components/ContactForm";

import "../css/contact.css";

const Contact = () => {
  const bg = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
    bg.current.style.transform = `translateX(${Math.floor(
      coords.x * -0.06
    )}px) translateY(${Math.floor(coords.y * -0.1)}px)`;
  };

  window.addEventListener("mousemove", handleMouseMove);
  return (
    <div
      className="contact-container w-100 h-100 d-flex align-items-center justify-content-center"
      // onMouseMove={handleMouseMove}
    >
      <img src="images/contactbg.jpg" alt="" className="contactbg" ref={bg} />
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
