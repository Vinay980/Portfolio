import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Cambridge Institute of Technology</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Studied software engineering, data structures, algorithms, and web
              development while building practical projects using modern
              technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>E-Pointer Consultancy</h5>
              </div>
              <h3>3 Months</h3>
            </div>
            <p>
              Worked on responsive web interfaces using HTML, CSS, JavaScript,
              and React.js while collaborating with mentors to build real-world
              projects and strengthen frontend development fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer - Frontend</h4>
                <h5>AGNES SYSTEMS</h5>
              </div>
              <h3>Jul 2024 - Present</h3>
            </div>
            <p>
              Developing scalable web applications using React.js, Next.js,
              TypeScript, Redux Toolkit, and Tailwind CSS. Improved application
              performance through lazy loading, code splitting, and reusable
              component architecture while integrating REST APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
