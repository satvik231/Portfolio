import Navbar from "./Componets/Navbar/Navbar.jsx";
import Intro from "./Componets/Intro/Intro.jsx";
import Skill from "./Componets/skill/Skill.jsx";
import Works from "./Componets/Works/Works.jsx";
import Langs from "./Componets/Langs/Langs.jsx";
import Form from "./Componets/form/Form.jsx";
import Footer from "./Componets/Footer/Footer.jsx";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Langs />
      <Form />
      <Footer />
    </div>
  );
};
export default App;
