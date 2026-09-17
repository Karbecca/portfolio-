import pppImage from "/images/profile.png";
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
            <p>I&apos;m Rebecca Karungi, a Software Engineer with a passion for building meaningful digital products.</p>

            <p>
              I specialise in full-stack web development, crafting responsive,
              scalable, and user-centred applications from the ground up. My
              work spans front-end interfaces built with React and modern
              JavaScript to robust back-end systems powered by Ruby on Rails
              and PostgreSQL.
            </p>

            <p>
              I thrive in collaborative environments, bringing strong
              communication, clean code practices, and a problem-solving
              mindset to every project. Whether working independently or as
              part of a team, I am committed to delivering software that is
              both technically sound and genuinely useful.
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
