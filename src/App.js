import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInformation';
import PersonalInfo from './components/PersonalInformation';
import EducationInfo from './components/EducationalInformation';
import SkillsInfo from './components/SkillsAndCompetence';
import WorkExperience from './components/WorkExperience';
import AffiliationInfo from './components/Affiliation';
import ReferencesInfo from './components/References';
import "./CV.css";

const App = () => {
  return (
    <div>
      <div className="header"><Header /></div>
      <div className="content">
        <div className="contact-info"><ContactInfo /></div>
        <div className="personal-info"><PersonalInfo /></div>
        <div className="education-info"><EducationInfo /></div>
        <div className="skills-info"><SkillsInfo /></div>
        <div className="work-experience"><WorkExperience /></div>
        <div className="affiliation-info"><AffiliationInfo /></div>
        <div className="references-info"><ReferencesInfo /></div>
      </div>
    </div>
  );
};

export default App;
