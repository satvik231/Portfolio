import "../Works/Works.css";
import project1 from "../../assets/Project1.png";
const Works = () => {
  return (
    <section id="Works">
      <span className="workTitle">My Projects</span>
      <span className="workDesc">
        This project section showcases a collection of my best work, crafted
        with precision and creativity. Each project is built using modern web
        technologies to ensure high performance, responsiveness, and a seamless
        user experience.
      </span>
      <div className="workImgs">
        <a href="https://github.com/satvik231" target="_blank">
          <img src={project1} alt="" className="workImg" />
        </a>
        <a href="https://github.com/satvik231" target="_blank">
          <img src={project1} alt="" className="workImg" />
        </a>
      </div>
    </section>
  );
};
export default Works;
