import css from "./App.module.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
// import logo from "./logo.svg";

function App() {
  return (
    <div className={css.App}>
      <Navbar />
      <Section id="welcome">
        <div className={css.relativeDiv}>
          <div className={css.hello}>Hello, I'm Katie Young</div>
        </div>
      </Section>
      <Section id="aboutMe">aboutMe</Section>
      <Section id="projects">projects</Section>
      <Section id="contactMe">contactMe</Section>
    </div>
  );
}

export default App;
