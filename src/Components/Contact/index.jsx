import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { contactOptions } from "../../sources";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "People through portfolio want to contact with you.",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS credentials here
    emailjs
      .send(
        "service_adlyz08", // EmailJS service ID
        "template_h8h1hjk", // EmailJS template ID
        formData,
        "HiK5ZnENXTylsWzyo" // Your EmailJS public user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("Error sending message: " + error.text);
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      );
  };

  return (
    <section id="contact" data-aos="fade-zoom-in">
      <div className="section-header" data-aos="fade-right">
        <h1 className="heading-1">
          <span className="gradient-text">Contact Us</span>
        </h1>
      </div>
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div
              className="flex-center option"
              data-aos="fade-right"
              key={index}
            >
              <div className="flex-center icon-wrapper">{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="value">{option.value}</h3>
            </div>
          ))}
        </div>
        <div className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join Forces with me!</span>
              <p className="muted">
                I build with precision and passion, creating web projects that
                stand out. It's as straightforward as that!
              </p>
            </h1>
          </div>
          <div className="middle">
            <div className="flex row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="control"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="control"
              />
            </div>
            <div className="flex row">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="control"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="control"
            ></textarea>
          </div>
          <div className="flex-center bottom">
            <button className="btn primary" onClick={handleSubmit}>
              Send Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
