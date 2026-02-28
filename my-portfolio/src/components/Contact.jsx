import emailjs from "emailjs-com";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0fvhs5l",
      "template_pftuawq",
      e.target,
      "XRKGi-QzwXD4UlPmi"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message.");
    });

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <form onSubmit={sendEmail}>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-image">
         <img src="../img/1.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}