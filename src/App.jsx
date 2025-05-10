import { useState } from 'react'
import './styles/App.css';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Resume from './components/Resume'

function App() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    location: ''
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    }
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    }
  ]);

  return (
    <div id="app">
      <div className="form">
        <ContactSection
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />

        <EducationSection
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />

        <ExperienceSection
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo} 
        />
      </div>
      <Resume
        contactInfo={contactInfo}
        educationInfo = {educationInfo}
        experienceInfo = {experienceInfo}
      />
    </div>
  );
}

export default App
