import { useState } from "react";
import Button from "../../components/Button";
import emailjsHandler from "../../utils/emailjsHandler";

const ContactUsSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjsHandler({ name, email, message }).then(
      () => {
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className="background-header">
      <div className="container">
        <div className="py-20 flex justify-center max-md:py-5">
          <form
            onSubmit={handleSubmit}
            className="contact-form p-11 box-m shadow background-white rounded-xl flex flex-col justify-center"
          >
            <p className="text-center mb-5 text-dark-blue text-semibold text-lg">
              Please if you have any question <br /> Contact us
            </p>
            <input
              type="text"
              value={name}
              placeholder={"Name"}
              className="contact-input mb-5 py-3 px-1 border-grey rounded-xl"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="contact-input mb-5 py-3 px-1 border-grey rounded-xl"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              value={message}
              placeholder="Enter you message here..."
              className="contact-input mb-5 py-3 px-1 border-grey rounded-xl"
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" className="button-primary">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
