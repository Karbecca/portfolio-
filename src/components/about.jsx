import pppImage from "/images/ppp.jpg";
import "../styles/css/about.css";

const AboutPage = () => {
  return (
    <div id="About">
      <section className="aboutpictureSection">
        <div className="aboutPicturecontainer">
          <div className="aboutPicturecontent">
            <img src={pppImage} alt="Inside Image" />
          </div>
        </div>
      </section>
      <section className="aboutdetailsSection">
        <div className="aboutheader">
          <h1 className="aboutdetailsHeader">WHO I AM </h1>
          <span className="aboutText">About Me</span>
        </div>
        <div className="aboutparagraph">
          <div className="aboutpagepartext">
            <p>I&apos;m Rebecca Karungi, a solutions developer for the Web.</p>

            <p>
              I create web services and applications. Innovative design and
              compelling architecture are my go-to moves with all my projects.
            </p>

            <p>
              I have been in the development space for nearly three years now
              and have close to one year of working experience. I’m always
              curious about learning new skills, tools, and concepts. In
              addition to working on various solo full-stack projects, I have
              worked with creative teams, which involves daily stand-ups and
              communications, source control, and project management.
            </p>
          </div>
        </div>
        <div className="aboutbuttonSection">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="aboutButton"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
