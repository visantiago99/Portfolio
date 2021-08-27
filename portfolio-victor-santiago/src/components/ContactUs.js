import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6tpnpgm', 'template_0q4ch9u', e.target, 'user_TaVJZ7HjIo1atAK5ecLNK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Name' />
      <input type="email" name="email" placeholder='Email' />
      <input type="text" name="subject" placeholder='Subject' />
      <br />
      <textarea name="message" placeholder='Your message'/>
      <br />
      <input type="submit" value="Send" />
    </form>
  );
}