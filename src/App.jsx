import { useState } from 'react'
import './styles/App.css';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
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
    },

  ]);

  const [workInfo, setWorkInfo] = useState([
    {
      company: '',
      position: '',
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
      </div>
      <Resume
        contactInfo={contactInfo}
        educationInfo = {educationInfo}
        workInfo = {workInfo}
      />
    </div>
  );
}

export default App
