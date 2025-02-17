import frontDesign from "../../assets/ui-design.png";
import RDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";
import apiDesign from "../../assets/API-Icon.png";
import "../skill/Skill.css";
const Skill = () => {
  return (
    <section id="Skill">
      <span className="skillTitle"> What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate React.js Frontend Developer with
        experience in building dynamic, high-performance, and user-friendly web
        applications. I have a deep understanding of modern frontend
        technologies and a keen eye for responsive and accessible design. My
        expertise includes React.js, JavaScript, Html, CSS, Bootstrap, and
        Redux, along with UI/UX principles to create seamless user experiences.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={frontDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React.js Development</h2>
            <p>
              Building scalable, efficient, and maintainable React applications
              with reusable components and state management solutions.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={RDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Development</h2>
            <p>
              Crafting visually appealing, high-performing web interfaces with
              HTML, CSS, JavaScript, and modern frameworks.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Responsive & Cross-Browser Development</h2>
            <p>
              Ensuring seamless performance across various devices and browsers.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={apiDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>API Integration</h2>
            <p>
              Connecting frontend applications with RESTful and GraphQL APIs for
              dynamic data handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
