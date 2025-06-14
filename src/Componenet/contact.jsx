import React, { useState } from "react";
import "./contact.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleClear = () =>
    setForm({ name: "", email: "", tel: "", message: "" });

  return (
    <section className="contact-section" id="contact">
      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="11dc0486-72f0-42b6-b99b-02d60b4fddcf"
        />

        <h2 className="contact-heading">{"< Contact Me />"}</h2>

        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="input-group">
          <FaPhoneAlt className="input-icon" />
          <input
            name="tel"
            type="tel"
            value={form.tel}
            onChange={handleChange}
            placeholder="Your Phone No."
            maxLength={10}
            required
          />
        </div>

        <div className="input-group">
          <FaRegCommentDots className="input-icon" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" onClick={() => toast.success("Message Sent!")}>
            Send
          </button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>

        <ToastContainer />
      </form>
    </section>
  );
};

export default Contact;
