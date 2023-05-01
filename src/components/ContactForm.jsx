import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { motion } from "framer-motion";
import { useEffect } from "react";

function ContactForm() {
  return (
    <motion.form className="contact-form mt-4 p-2">
      <motion.div
        className="mb-3"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <Form.Label className="form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="form-email"
          className="form-input"
        />
        <Form.Text className="text-muted">
          We'll never share your email{" "}
          <span className="form-muted-remove">with anyone else.</span>
        </Form.Text>
      </motion.div>

      <motion.div
        className="mb-3"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
      >
        <Form.Label className="form-label">Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your Message"
          rows={3}
          name="form-message"
          className="form-message form-input"
        />
      </motion.div>

      <motion.button
        className="btn btn-primary"
        type="submit"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        Submit
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;
