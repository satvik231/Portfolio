import "../Intro/Intro.css";
import bg from "../../assets/satvik.png";
import { Link } from "react-scroll";
import hireme from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Satvik</span>
          <br /> Frontend ReactJS Developer
        </span>
        <p className="introPara">
          I'm a skilled Frontend ReactJS Developer with experience in creating
          visually <br /> appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img className="btnImg" src={hireme} alt="" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};
export default Intro;
