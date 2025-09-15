import ContactForm from "./shared/contactForm";
import "../styles/css/contact.css";
import "../styles/css/helpers.css";

const Contact = () => {
  return (
    <section className="contactSection" id="Contact">
      <div className="contactCredentials">
        <h1 className="Name">Rebecca Karungi</h1>
        <p className="duties">
          Creative Designer & Full-Stack <br /> Developer
        </p>
      </div>
      <div className="contactSocials">
        <section className="usefulLinksHolder">
          <h1 className="useful_title">Useful Links</h1>
          <ul className="useful_links">
            <li className="u_link">
              <a href="#Home">Home</a>
            </li>
            <li className="u_link">
              <a href="#About">About</a>
            </li>
            <li className="u_link">
              <a href="#Skills">Skills</a>
            </li>
            <li className="u_link">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="u_link last">
              <a href="#Testimonials">Testimonials</a>
            </li>
          </ul>
        </section>
        <section className="SocialMediasHolder">
          <h1 className="socials_title">Socials</h1>
          <ul className="social_links">
            <li className="s_link">
              <a
                href="https://www.linkedin.com/in/karungi-rebecca/"
                target="blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="s_link">
              <a
                href="https://wa.me/250784563836"
                target="blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="s_link">
              <a
                href="https://twitter.com/_karbecca"
                target="blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="s_link">
              <a
                href="https://github.com/karbecca"
                target="blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
