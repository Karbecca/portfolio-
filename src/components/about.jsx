import "../styles/css/about.css";

const AboutPage = () => {
  return (
    <div id="About">
      <section className="aboutpictureSection">
        <div className="aboutPicturecontainer">
          <div className="aboutPicturecontent">
            <img src="/images/ppp.jpg" alt="Inside Image" />
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
            <p>I'm Rebecca Karungi, a solutions developer for the Web.</p>

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
            href="https://docs.google.com/document/d/1Uo2hFVcKeuQYoqGsYQgDrDS1g8v_JIRq5Af40SM0fVA/edit?usp=sharing"
            className="aboutButton"
            target="blank"
          >
            My Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
