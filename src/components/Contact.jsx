import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contactme.svg";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_z69dvlk", // replace with your EmailJS service ID
        "template_xmmlptj", // replace with your EmailJS template ID
        form,
        "wCCN0kLRfEGvknRzx" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("sent");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        () => setStatus("error")
      );

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center mb-6">Get in Touch</h2>
      <div className="contact-container">
        {/* LEFT SIDE */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={contactImg} alt="Contact" />
          <div className="contact-info">
            <h3>Let’s Talk!</h3>
            <p>Feel free to reach out for collaborations or just a friendly chat.</p>
            <p>📧 <strong>mohitparmar2312@gmail.com</strong></p>
            <p>📞 <strong>+91 9664919804</strong></p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            required
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            required
          />
          <button className="btn" type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="success">✅ Message sent — thank you!</p>
          )}
          {status === "error" && (
            <p className="error">❌ Something went wrong. Try again.</p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
