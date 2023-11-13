import React from 'react';
import picture from './picture.jpg'

const PersonalInfo = () => {
  return (
    <div className="section">
      <h2>Personal Information</h2>
      <img src={picture} alt="" />
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
  );
};

export default PersonalInfo;
