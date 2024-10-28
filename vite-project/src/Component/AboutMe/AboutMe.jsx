// src/About.js
import React from 'react';
import './AboutMe.css'; // Import the CSS for styling


const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About Me</h2>
            <div className="profile">
                <img src='https://scontent.fsin14-1.fna.fbcdn.net/v/t39.30808-6/455947122_2021947994889020_8719799435616742851_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zAlwYTcsd3kQ7kNvgGl4s5b&_nc_zt=23&_nc_ht=scontent.fsin14-1.fna&_nc_gid=A8tUNwQGyU_9Nb1xYTMTVQM&oh=00_AYCMtXADTiMRviKxnxTqrrcjBhnkneuCyECTtO-H-ak7Iw&oe=67256956' alt="Your Name" className="profile-picture" />
                <div className="profile-info">
                    <p>
                        Hello! I’m <strong>MD Mohe Uddin Monna</strong>, a dedicated web developer based in Singapore. With a passion for creating dynamic and engaging web applications, I specialize in using modern technologies to build robust solutions. My journey in web development began [insert when you started coding], and since then, I have honed my skills in various languages and frameworks, particularly JavaScript (ES6+), React.js, Node.js, and Express.js.
                    </p>
                    <p>
                        I believe that effective web development combines both design and functionality. My approach focuses on creating user-friendly interfaces that provide seamless experiences. Whether it's developing responsive layouts or optimizing performance, I strive to ensure that every aspect of the application meets high standards.
                    </p>
                    <p>
                        Throughout my career, I've worked on multiple projects ranging from simple landing pages to complex full-stack applications. I thrive in collaborative environments where I can learn from others and contribute my knowledge. In addition to coding, I have experience with databases like MongoDB and MySQL, enabling me to manage and query data effectively.
                    </p>
                    <p>
                        Outside of my technical work, I stay engaged with the web development community, participating in forums, attending meetups, and contributing to open-source projects. I am always eager to learn new skills and keep up with the latest industry trends, which helps me deliver innovative solutions. I look forward to connecting with other developers and working on exciting projects that challenge me to grow.
                    </p>
                </div>
            </div>
            <h3 className="skills-title">Skills</h3>
            <ul className="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MySQL</li>
                <li>RESTful APIs</li>
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
            </ul>
            <footer className="footer">
                <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
