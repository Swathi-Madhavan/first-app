import ProjectInfo from "../UIComponents/ProjectInfo";
import { ProjectProps } from "../model";

export default function Projects({ bigBox, topic, techIcons }: ProjectProps) {
  return (
    <section className="container4" id="my-projects">
      <div className="projects">
        <p>projects</p>
      </div>
      <div className="my-experience">
        <p>Some things I’ve worked (or am working) on</p>
      </div>
      <div className="row-align">
        <img className="big-box" src={bigBox.imgSrc} alt={bigBox.alt} />
        <div className="column-layout">
          <ProjectInfo {...topic} />
          <div className="tech-used">
            <div className="tech-icon">
              {techIcons.map((icon, index) => (
                <i key={index.toString()} className={icon.techImg}></i>
              ))}
            </div>
            <div className="view-code-container">
              <button className="view-code">
                <a
                  href="https://github.com/Swathi-Madhavan/portfolio-website"
                  target="_blank"
                  className="remove-hyper-link-white"
                  rel="noreferrer"
                >
                  VIEW CODE
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
