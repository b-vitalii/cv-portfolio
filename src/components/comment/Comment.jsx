import "./comment.scss";

export default function Comment() {
  const data = [
    {
      id: 1,
      name: "Ivan Nosenko",
      title: "Web Developer",
      img: "https://media-exp3.licdn.com/dms/image/C5603AQH9os91Z6KxeA/profile-displayphoto-shrink_800_800/0/1517038940705?e=1631145600&v=beta&t=IJNcUcjuC8LaJrh1uNCpDk6oOFJ93hg2gFH0TQUAgwE",
      icon: "images/linkedin2.png",
      dev: "images/js-logo.png",
      linkedin: "https://www.linkedin.com/in/ivan-nosenko-190b14153/",
      desc: "Together with Vitalii, we are developing our joint startup. Vitalii is very attentive, responsive and always striving to learn something new.",
    },
    {
      id: 2,
      name: "Andrey Volosovich",
      title: "Full Stack Developer",
      img: "https://media-exp3.licdn.com/dms/image/C4E03AQF7JDxyqvLChw/profile-displayphoto-shrink_800_800/0/1601665464750?e=1631145600&v=beta&t=DifYspHljMTmL6KZFV2-077RdyL6Me_u8TBz996JoDU",
      icon: "images/linkedin2.png",
      dev: "images/react-logo.png",
      linkedin: "https://www.linkedin.com/in/andrey-v-198124bb/",
      desc: "Vitalii is very self-motivated. He is looking for new knowledge permanently, especially in Web & JavaScript. ",
      featured: true,
    },
    {
      id: 3,
      name: "Konstantin Bondarenko",
      title: "1C Developer",
      img: "https://media-exp3.licdn.com/dms/image/C5603AQHea02V1_qP0g/profile-displayphoto-shrink_800_800/0/1534327981025?e=1631145600&v=beta&t=yz3RddicFTKeLNokOSxIzr31J_RO08R_SVhJ7HsFkV0",
      icon: "images/linkedin2.png",
      dev: "images/node-logo.png",
      linkedin:
        "https://www.linkedin.com/in/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD-%D0%B1%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-a91238a5/",
      desc: "We worked with Vitalii on one project, I can say that Vitaly is a good developer and also he is a great team player as well and working with him was a pleasure for me. ",
    },
  ];
  return (
    <div className="comment" id="comment">
      <h1>Comment</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.dev} className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <a href={d.linkedin}>
                <img className="right" src={d.icon} alt="" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
