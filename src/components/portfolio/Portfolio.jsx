import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  jsPortfolio,
  reactPortfolio,
  workPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "work",
      title: "In work",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "javascript":
        setData(jsPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "work":
        setData(workPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.code}>
              <img src={d.img} alt="" />
            </a>

            <h3>{d.title}</h3>

            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
