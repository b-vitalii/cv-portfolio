import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "images/front.png",
      title: "Front-End Development",
      source: "https://github.com/b-vitalii",
      desc: "My main technology stack I work with: JavaScript, React, Redux, HTML5, CSS3, SASS.",
      img: "images/fed.jpg",
    },
    {
      id: "2",
      icon: "images/mobile4.png",
      title: "Mobile Application",
      source: "https://github.com/b-vitalii",
      desc: "One of my strongest interests and hobbies is mobile development. I love developing mobile applications that will be useful to people. React Native.",
      img: "https://support.apple.com/library/content/dam/edam/applecare/images/zh_HK/iOS/ios14-iphone-11pro-edit-home-screen.jpg",
    },
    {
      id: "3",
      icon: "images/webd.png",
      title: "Web Design",
      source: "https://github.com/b-vitalii",
      desc: "I think over the design of websites and applications created by me myself and try to make them as responsive and interactive as possible. Photoshop, Figma.",
      img: "https://grefar.com/wp-content/uploads/2019/04/seo-friendly-website-design.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.source}>
                    <span>Projects</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="images/arrow1.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="images/arrow1.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}


