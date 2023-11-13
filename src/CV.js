import React from 'react';
import './CV.css'; 

const CV = () => {
  return (
    <div>
      <div className="header">
        <h1 className="fade-in">Curriculum Vitae</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2>Contact Information</h2>
          <p>
            Mobile: 081245720326<br />
            E-mail: s22210002@student.unklab.ac.id
          </p>
        </div>

        <div className="section">
          <h2>Personal Information</h2>
          <img src="https://via.placeholder.com/300" alt="" />
          <p>
            Name: Hizkia Gaynell Pascal Siregar<br />
            Age: 19<br />
            Sex: Male<br />
            Place and Date of Birth: Bitung, 10 April 2004<br />
            Citizenship: Indonesian<br />
            Martial Status: Single<br />
            Address: Crystal 2 dorm, Universitas Klabat<br />
            Country of Residence: Indonesia<br />
            Phones: 081245720326<br />
            Email: s22210002@student.unklab.ac.id
          </p>

          <p>
            <strong>Physical Description:</strong><br />
            Complexion: Tan<br />
            Scar and marks: None<br />
            Hair Color: Black<br />
            Built: Round<br />
            Eyes color: Dark Brown<br />
            Handicap: None
          </p>
        </div>

        <div className="section">
          <h2>Educational Information</h2>
          <p>
            <strong>Degree:</strong> Bachelor of Science<br />
            <strong>Institution:</strong> Universitas Klabat<br />
            <strong>College:</strong> Faculty of Computer Science<br />
            <strong>Major / Minor:</strong> Informatics<br />
            <strong>Expected Date of Graduation:</strong> May 2026 (Expected)<br />
            <strong>GPA:</strong> 3.88 / 4.00 (Current Standing)
          </p>

          <h3>Educational Achievement</h3>

          <p>
            Bachelor of Science in Computer Science<br />
            Universitas Klabat, Airmadidi<br />
            Sulawesi Utara<br />
            Graduated: 2026
          </p>

          <h3>Training and Course Attended</h3>

          <ul>
            <li>Algorithms and Data Structures</li>
            <li>Advanced Programming Concepts</li>
            <li>Database Design and Management</li>
            <li>Computer Networks and Security</li>
            <li>Software Development Life Cycle</li>
            <li>Operating Systems Concepts</li>
            <li>Web Development Basics</li>
          </ul>

          <h3>Workshop, Convention and Seminar Participated</h3>

          <ul>
            <li>
              Attended "International Conference on Computer Science and Technology" in 2022, where I learned about the
              latest advancements in the field and presented my research on artificial intelligence in computer vision.
            </li>
            <li>
              Completed a two-day "Web Development Workshop" in 2019, where I learned about the latest web development
              technologies and created a dynamic website using HTML, CSS, and JavaScript.
            </li>
            <li>
              Attended "Creative Writing Seminar" in 2018, where I gained valuable insights into the craft of writing and
              learned techniques for developing compelling narratives.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Skills and Competence</h2>

          <ul>
            <li>Proficient in various programming languages such as Java, Python, and C++</li>
            <li>Skilled in software development and design</li>
            <li>Experienced in working with agile methodologies and project management tools</li>
            <li>Strong problem-solving and analytical skills</li>
            <li>Excellent written and verbal communication skills</li>
            <li>Creative and proficient in writing, with experience in writing articles, short stories, and poetry</li>
          </ul>

          <h3>Selected Paper</h3>

          <p>"Exploring the Impact of Artificial Intelligence on Modern Society", a paper that was submitted to Object Oriented Programming Class, April 2024.</p>
        </div>

        <div className="section">
          <h2>Work Experience</h2>

          <h3>Freelance Writer, Self-Employed (January 2019 – Present)</h3>

          <ul>
            <li>Created and edited content for various clients, including blog posts, website copy, and product descriptions</li>
            <li>Conducted research on various topics to ensure accuracy of content</li>
            <li>Consistently met deadlines and provided high-quality work</li>
          </ul>

          <h3>Computer Science Tutor, Universitas Klabat (September 2018 - December 2019)</h3>

          <ul>
            <li>Assisted students with understanding course material and homework assignments</li>
            <li>Led group study sessions to reinforce course material and answer questions</li>
            <li>Created and graded quizzes and exams to assess student understanding</li>
            <li>Worked with professors to ensure students had access to resources and support</li>
          </ul>
        </div>

        <div className="section">
          <h2>Affiliation</h2>

          <ul>
            <li>Volunteer Mentor, young writers' program at local community center</li>
            <li>Volunteer at the annual B.E.R.K Technology Conference</li>
          </ul>
        </div>

        <div className="section">
          <h2>References</h2>

          <p>Furnished upon request.</p>
        </div>
      </div>
    </div>
  );
};

export default CV;
