import React from "react";
import './MainIntro.css'


class MainIntro extends React.Component {
  render() {
    return (
      <section>
        <div className="intro-container">
          <h1>
            LET ME INTRODUCE <span className="myself">MYSELF</span>
          </h1>
          <p>
            I fell in <span className="myself">love</span> with programming and I have at least learned
            something, I think… 🤷‍♂️
            <br />
            <br />I am proficient in languages and technologies like
            <i>
              <b> <span className="myself">Javascript</span> and <span className="myself">React.js</span> </b>
            </i>
            <br />
            <br />
            I also like to mess with the backend using
            <i>
              <b> web technologies </b> like <span className="myself">Node.js</span>
            </i>
            <br />
            <br />
            <span className="myself">Learning</span> new things is a general interest of mine, and when I decide I want to learn something
            <br />
            I usually go all-in.
            <i>
              <b>
                &nbsp;If I don't know how something works I wont stop until I deeply understand
                <br />
                the why's and the how's.
              </b>
              <br />
              <br />
              <b> Enter coding and endless learning.</b>
            </i>
          </p>
        </div>
      </section>
    );
  };
};

export default MainIntro;