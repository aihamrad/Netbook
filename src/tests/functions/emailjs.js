import emailjs from "emailjs-com";
import emailjsHandler from "../../utils/emailjsHandler";

jest.mock("emailjs-com", () => ({
  send: jest.fn(),
}));

describe("emailjsHandler", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call emailjs.send with the correct parameters", () => {
    const name = "Aiham";
    const email = "netbook-test@outlook.com";
    const message = "Hello, world!";
    emailjsHandler({ name, email, message });
    expect(emailjs.send).toHaveBeenCalledWith(
      "service_gpz0c3l",
      "template_m9txdi9",
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      "bpVQDfGx8_5JSslYA"
    );
  });

  it("should return the result of emailjs.send", async () => {
    const sendResult = { status: 200 };
    emailjs.send.mockResolvedValueOnce(sendResult);
    const result = await emailjsHandler({});
    expect(result).toBe(sendResult);
  });

  it("should throw an error if emailjs.send rejects", async () => {
    const sendError = new Error("Send error");
    emailjs.send.mockRejectedValueOnce(sendError);
    await expect(emailjsHandler({})).rejects.toThrow(sendError);
  });
});
