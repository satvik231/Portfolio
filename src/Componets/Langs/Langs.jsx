import "../Langs/Langs.css";
import htmllogo from "../../assets/html-logo.png";
import csslogo from "../../assets/css-logo.png";
import jslogo from "../../assets/javascript-logo.png";
import bootlogo from "../../assets/bootstrap-logo.png";
import reactlogo from "../../assets/Reactjs-logo.png";
import reduxlogo from "../../assets/redux-logo.png";
import mslogo from "../../assets/mysql-logo.png";
import nodelogo from "../../assets/node-logo.png";
const Langs = () => {
  return (
    <section id="Langs">
      <span className="LangTitle">Skills</span>
      <span className="LangDesc">These are My Programing SKills</span>
      <div className="langImgs">
        <img src={htmllogo} alt="" className="LangImg" />
        <img src={csslogo} alt="" className="LangImg" />
        <img src={jslogo} alt="" className="LangImg" />
        <img src={bootlogo} alt="" className="LangImg" />
        <img src={reactlogo} alt="" className="LangImg" />
        <img src={reduxlogo} alt="" className="LangImg" />
        <img src={mslogo} alt="" className="LangImg" />
        <img src={nodelogo} alt="" className="LangImg" />
      </div>
    </section>
  );
};
export default Langs;
