import "./index.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">&lt;SS/&gt;</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        {/* Decorative boxes */}
        <div className="glow-box box-left"></div>
        <div className="glow-box box-right"></div>

        <div className="hero-content">

          <p className="small-intro">
            Welcome to my portfolio 👋
          </p>

          <h1>
            Hi, I'm <span>Sandhya</span>
            <br />
            Sahani <span className="wave">👋</span>
          </h1>

          <h2>
            Frontend Developer | Student | Python Learner
          </h2>

          <p className="description">
            I'm a 12th grade student passionate about creating
            <span> beautiful and interactive websites </span>
            using modern web technologies.
          </p>

          <p className="tech-text">
            HTML • CSS • JavaScript • React • Python
          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="btn secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>

          </div>


          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/YOUR-GITHUB-USERNAME"
              target="_blank"
              rel="noreferrer"
              className="social github"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
              target="_blank"
              rel="noreferrer"
              className="social linkedin"
            >
              LinkedIn
            </a>

            <a
              href="mailto:YOUR-EMAIL@gmail.com"
              className="social email"
            >
              Email
            </a>

          </div>

        </div>


        {/* Scroll indicator */}
        <div className="scroll-down">
          ↓
        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-heading">

            <p className="section-label">
              GET TO KNOW ME
            </p>

            <h2>
              About <span>Me</span>
            </h2>

          </div>


          <div className="about-content">

            <div className="about-text">

              <h3>
                Hi, I'm Sandhya Sahani 👋
              </h3>

              <p>
                I am a 12th pass-out student with a background in
                Physics, Chemistry, Mathematics and Computer Science.
                I have a strong interest in technology and enjoy
                learning how websites and applications are built.
              </p>

              <p>
                I have learned the fundamentals of
                <strong> HTML, CSS, JavaScript and React</strong>,
                and I am currently improving my frontend development
                skills by building small projects and experimenting
                with new ideas.
              </p>

              <p>
                I have also recently started learning
                <strong> Python</strong>. I am still at the beginning
                of my programming journey, but I enjoy solving problems,
                writing code and learning something new every day.
              </p>

              <p>
                My goal is to keep improving my programming and
                development skills, build more real-world projects,
                and grow into a skilled software developer.
              </p>

            </div>


            <div className="about-card">

              <div className="about-card-icon">
                💻
              </div>

              <h3>
                Currently Learning
              </h3>


              <div className="learning-item">

                <span>🐍</span>

                <div>
                  <strong>Python</strong>
                  <p>Currently learning the fundamentals</p>
                </div>

              </div>


              <div className="learning-item">

                <span>⚛️</span>

                <div>
                  <strong>React</strong>
                  <p>Improving frontend development skills</p>
                </div>

              </div>


              <div className="learning-item">

                <span>🚀</span>

                <div>
                  <strong>Web Development</strong>
                  <p>Building small projects and learning by doing</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      {/* ================= SKILLS SECTION ================= */}

<section id="skills" className="skills-section">

  <div className="skills-container">

    {/* Section Heading */}
    <div className="skills-heading">

      <p className="section-label">
        MY TECHNICAL SKILLS
      </p>

      <h2>
        Skills & <span>Technologies</span>
      </h2>

      <p className="skills-intro">
        Here are the technologies and tools I am learning and using
        to build websites, applications and programming projects.
      </p>

    </div>


    {/* Skills Grid */}
    <div className="skills-grid">

      {/* Frontend */}
      <div className="skill-card">

        <div className="skill-icon">
          🌐
        </div>

        <h3>Frontend Development</h3>

        <p>
          Building responsive and interactive websites using modern
          frontend technologies.
        </p>

        <div className="skill-tags">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>

        </div>

      </div>


      {/* Programming */}
      <div className="skill-card">

        <div className="skill-icon">
          💻
        </div>

        <h3>Programming</h3>

        <p>
          Learning programming fundamentals, problem solving and
          writing clean and efficient code.
        </p>

        <div className="skill-tags">

          <span>Python</span>
          <span>C++</span>

        </div>

      </div>


      {/* Tools */}
      <div className="skill-card">

        <div className="skill-icon">
          🛠️
        </div>

        <h3>Tools & Version Control</h3>

        <p>
          Using developer tools to write, manage and collaborate
          on projects.
        </p>

        <div className="skill-tags">

          <span>VS Code</span>
          <span>Git</span>
          <span>GitHub</span>

        </div>

      </div>


      {/* Currently Learning */}
      <div className="skill-card learning-card">

        <div className="skill-icon">
          🚀
        </div>

        <h3>Currently Learning</h3>

        <p>
          Currently improving my Python skills and exploring backend
          development to become a full-stack developer.
        </p>

        <div className="skill-tags">

          <span>Python</span>
          <span>Backend Development</span>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= PROJECTS SECTION ================= */}

<section id="projects" className="projects-section">

  <div className="projects-container">

    <div className="projects-heading">

      <p className="section-label">
        MY WORK
      </p>

      <h2>
        My <span>Projects</span>
      </h2>

      <p>
        Here are some of the projects I have built while learning
        programming and web development.
      </p>

    </div>


    <div className="projects-grid">


      {/* Banking System */}

      <div className="project-card">

        <div className="project-icon">
          🏦
        </div>

        <h3>Banking System</h3>

        <p>
          A Python-based banking system that simulates basic
          banking operations such as account handling, deposits,
          withdrawals and balance management.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>OOP</span>
          <span>Logic</span>
        </div>

      </div>


      {/* Hotel Management */}

      <div className="project-card">

        <div className="project-icon">
          🏨
        </div>

        <h3>Hotel Management System</h3>

        <p>
          A web-based hotel management project created with
          HTML, CSS and JavaScript to practice user interaction
          and frontend development.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

      </div>


      {/* Tic Tac Toe */}

      <div className="project-card">

        <div className="project-icon">
          🎮
        </div>

        <h3>Tic-Tac-Toe Game</h3>

        <p>
          An interactive browser-based Tic-Tac-Toe game where
          players can play against each other using JavaScript
          game logic.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

      </div>


      {/* Coin Collector */}

      <div className="project-card">

        <div className="project-icon">
          🪙
        </div>

        <h3>Coin Collector Game</h3>

        <p>
          A Python-based text game where the player manages
          their character, energy and choices while collecting
          coins.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>Game Logic</span>
        </div>

      </div>


      {/* Rock Paper Scissors */}

      <div className="project-card">

        <div className="project-icon">
          ✊
        </div>

        <h3>Rock Paper Scissors</h3>

        <p>
          A simple interactive browser game built using
          HTML, CSS and JavaScript with user input and
          game decision logic.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

      </div>


      {/* Calculator */}

      <div className="project-card">

        <div className="project-icon">
          🧮
        </div>

        <h3>Python Calculator</h3>

        <p>
          A beginner-friendly Python calculator that performs
          basic arithmetic operations using functions and
          user input.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>Functions</span>
        </div>

      </div>


    </div>

  </div>

</section>

{/* ================= EDUCATION SECTION ================= */}

<section id="education" className="education-section">

  <div className="education-container">

    {/* Heading */}

    <div className="education-heading">

      <p className="section-label">
        MY EDUCATION
      </p>

      <h2>
        Education <span>Journey</span>
      </h2>

      <p>
        My academic journey and the milestones I have achieved
        along the way.
      </p>

    </div>


    {/* Education Timeline */}

    <div className="education-timeline">


      {/* 12th */}

      <div className="education-item">

        <div className="education-dot">
          🎓
        </div>

        <div className="education-card">

          <div className="education-year">
            2024 - 2026
          </div>

          <h3>
            Higher Secondary Education (11th & 12th)
          </h3>

          <h4>
            SKC Junior College
          </h4>

          <p>
            Completed my 11th and 12th with
            <strong> Physics, Chemistry, Mathematics and
            Computer Science (PCM + CS)</strong>.
          </p>

          <div className="education-result">
            <span>12th Percentage</span>
            <strong>73%</strong>
          </div>

          <div className="education-badge">
            Completed in 2026
          </div>

        </div>

      </div>


      {/* 10th */}

      <div className="education-item">

        <div className="education-dot">
          🏫
        </div>

        <div className="education-card">

          <div className="education-year">
            2024
          </div>

          <h3>
            Secondary School Education
          </h3>

          <h4>
            Mother Bless English High School
          </h4>

          <p>
            Completed my 10th standard education and
            developed a strong academic foundation.
          </p>

          <div className="education-result">
            <span>10th Percentage</span>
            <strong>85%</strong>
          </div>

          <div className="education-badge">
            Completed in 2024
          </div>

        </div>

      </div>


    </div>

  </div>

</section>

{/* ================= CONTACT SECTION ================= */}

<section id="contact" className="contact-section">

  <div className="contact-container">

    {/* Heading */}

    <div className="contact-heading">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h2>
        Let's <span>Connect</span>
      </h2>

      <p>
        I'm always open to learning, collaborating and connecting
        with new people. If you have a project idea, want to work
        together, or simply want to say hello, feel free to reach out!
      </p>

    </div>


    {/* Contact Cards */}

    <div className="contact-grid">


      {/* Email */}

      <a
        href="mailto:sandhya.s7350@gmail.com"
        className="contact-card"
      >

        <div className="contact-icon">
          📧
        </div>

        <div>
          <h3>Email</h3>
          <p>sandhya.s7350@gmail.com</p>
        </div>

      </a>


      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/sandhya-sahani"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >

        <div className="contact-icon">
          💼
        </div>

        <div>
          <h3>LinkedIn</h3>
          <p>Sandhya Sahani</p>
        </div>

      </a>


      {/* GitHub */}

      <a
        href="https://github.com/sandhya-sahani"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >

        <div className="contact-icon">
          💻
        </div>

        <div>
          <h3>GitHub</h3>
          <p>sandhya-sahani</p>
        </div>

      </a>


      {/* Instagram */}

      <a
        href="https://www.instagram.com/sandhya.tech"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >

        <div className="contact-icon">
          📸
        </div>

        <div>
          <h3>Instagram</h3>
          <p>@sandhya.tech</p>
        </div>

      </a>

    </div>


    {/* Bottom Message */}

    <div className="contact-bottom">

      <p>
        Have an idea? Let's build something together. 🚀
      </p>

      <a
        href="mailto:sandhya.s7350@gmail.com"
        className="contact-button"
      >
        Send Me an Email →
      </a>

    </div>

  </div>

</section>

    </div>
  );
}

export default App;