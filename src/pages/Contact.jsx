import React, { useEffect, useRef, useState } from "react";
import ContactForm from "../components/ContactForm";

import "../css/contact.css";

const Contact = () => {
  // const bg = useRef();

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     let x = event.clientX;
  //     let y = event.clientY;
  //     bg.current.style.transform = `translateX(${Math.floor(
  //       x * -0.06
  //     )}px) translateY(${Math.floor(y * -0.1)}px)`;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <div className="contact-container w-100 h-100 d-flex align-items-center justify-content-center">
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
