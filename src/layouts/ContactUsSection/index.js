import { useState } from "react";
import ContactForm from "../../components/ContactusForm";
import emailjsHandler from "../../utils/emailjsHandler";

const ContactUsSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alreadySent, setAlreadySent] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    emailjsHandler({ name, email, message }).then(
      () => {
        setAlreadySent(true);
        setSubmitDisabled(false);
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
          <div className="contact-form p-11 box-m shadow background-white rounded-xl ">
            {!alreadySent ? (
              <ContactForm
                handleSubmit={handleSubmit}
                name={name}
                email={email}
                message={message}
                setName={setName}
                setEmail={setEmail}
                setMessage={setMessage}
                submitDisabled={submitDisabled}
              />
            ) : (
              <div>
                <p className="text-bold text-primary text-center">
                  We recived your message <br /> Thanks {":)"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
