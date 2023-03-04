import emailjs from 'emailjs-com';

const emailjsHandler = ({name, email, message}) => {
    return emailjs.send('service_gpz0c3l', 'template_m9txdi9', {
        from_name: name,
        from_email: email,
        message: message,
      }, 'bpVQDfGx8_5JSslYA')
}
export default emailjsHandler