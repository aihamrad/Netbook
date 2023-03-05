import Button from "../Button";

const ContactForm = ({
  handleSubmit,
  name,
  email,
  message,
  setName,
  setEmail,
  setMessage,
  submitDisabled,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      <input
        type="text"
        required
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
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        value={message}
        placeholder="Enter you message here..."
        className="contact-input mb-5 py-3 px-1 border-grey rounded-xl"
        rows={5}
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type="submit"
        className="button-primary"
        disabled={submitDisabled}
      >
        {submitDisabled ? "Processing..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
