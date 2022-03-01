import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <div className="mx-2">
        <p>
          A react app to search for Github profiles and see profile info.
          <br />
          Created by <strong>Kiran Tammana</strong>.
        </p>
        <div className="flex row my-4 text-3xl">
          <p className="text-xl mr-3">Connect at: </p>
          <a
            href="https://github.com/tcskiran"
            target="_blank"
            rel="noreferrer"
            className="mr-3"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tcskiran/"
            target="_blank"
            rel="noreferrer"
            className="mx-3"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com/tcskiran/"
            target="_blank"
            rel="noreferrer"
            className="mx-3"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/tcskiran/"
            target="_blank"
            rel="noreferrer"
            className="mx-3"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
