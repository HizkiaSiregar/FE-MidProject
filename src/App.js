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

import { Fade } from 'react-reveal';

const App = () => {
  const fadeDuration = 980;

  return (
      <div>
        <Fade duration={fadeDuration}><Header /></Fade>
        <div className="content">
          <Fade duration={fadeDuration}><ContactInfo /></Fade>
          <Fade duration={fadeDuration}><PersonalInfo /></Fade>
          <Fade duration={fadeDuration}><EducationInfo /></Fade>
          <Fade duration={fadeDuration}><SkillsInfo /></Fade>
          <Fade duration={fadeDuration}><WorkExperience /></Fade>
          <Fade duration={fadeDuration}><AffiliationInfo /></Fade>
          <Fade duration={fadeDuration}><ReferencesInfo /></Fade>
        </div>
      </div>
  );
};

export default App;
