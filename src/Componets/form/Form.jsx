import "../form/Form.css";
import { useRef } from "react";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/Github-Logo.png";
import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_omhvntx", "template_ic0w1rc", form.current, {
        publicKey: "Bp8lvw9njLt6msBfl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <span className="contactPageTitle">Contact Me</span>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea name="message" rows="5" className="msg"></textarea>
        <button className="submit" type="submit" value="send">
          Submit
        </button>
        <div className="Links">
          <img src={insta} alt="" className="Link" />
          <img src={linkedin} alt="" className="Link" />
          <img src={github} alt="" className="Link" />
        </div>
      </form>
    </section>
  );
};
export default Form;
