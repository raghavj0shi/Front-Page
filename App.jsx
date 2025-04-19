import React from 'react';
import Button from './Button';
import Student from './Student.jsx';
import img1 from './assets/meri_pic.jpg';
import img2 from './assets/vk.jpg';
import './App.css';

function App() {
  return (
    <>
      <h1> MAJOR PROJECT</h1>
      <h2> DECENTRALIZED STEGANOGRAPHIC DATA STORAGE</h2>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* 📦 Content over the background */}
      <div className="container">
        <Student 
          image={img2} 
          name='ANKUSH SINGH' 
          role="Group Leader" 
          responsibility="Contributed to both frontend and backend development, and managed the team." 
        />
        <Student 
          name='TANISHQ KANDARI'
          image={img2} 
          role="Backend Developer" 
          responsibility="Worked on the backend development of the project." 
        />
        <Student 
          name='MOHIT KALA' 
          age="23" 
          isStudent={true} 
          image={img2} 
          role="Backend Developer" 
          responsibility="Focused on backend programming and API development." 
        />
        <Student 
          image={img1} 
          name='RAGHAV JOSHI' 
          role="Frontend Developer" 
          responsibility="Developed the frontend of the project using React." 
        />
      </div>

      <Button />
    </>
  );
}

export default App;
