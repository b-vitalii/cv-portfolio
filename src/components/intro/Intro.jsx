import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End Developer", "Mobile Developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/foto4.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vitalii Boiko</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="desc">
            <p>
              I'm from Kyiv, Ukraine.
              <br />
              I've been developing for a year, mostly work with JavaScript and
              such libraries as React , but the using of new languages or
              frameworks is not a problem. I like to develop web applications,
              that people enjoy using, and it also brings me additional
              motivation to move on. I give attention to the various little
              things to achieve the highest quality results. Ready to learn new
              ones and expand my current knowledge of the aforementioned as
              needed to the point where it makes me do my job faster, better and
              more efficiently.
              <br />
              More detailed information you can get, by downloading my CV.{" "}
              <br />
              <button
                onClick={() =>
                  (window.location =
                    "https://drive.google.com/file/d/1rtOk1CcC_IewKWvO8eKn-YpPU-JrH7TF/view?usp=sharing")
                }
              >
                Download CV
              </button>
            </p>
          </div>
        </div>
        <a href="#portfolio">
          <img src="images/arrowd4.png" alt="" />
        </a>
      </div>
    </div>
  );
}
