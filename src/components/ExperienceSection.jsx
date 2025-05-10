import ExperienceForm from './ExperienceForm';
import '../styles/Section.css';

function ExperienceSection({experienceInfo, setExperienceInfo}) {

  function handleChange(index, fieldName, value) {
    setExperienceInfo(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [fieldName]: value
      };
      return updated;
    });
  }

  function handleAddEducation() {
    setExperienceInfo(prev => [
      ...prev,
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
      }
    ]);
  }

  return (
    <form className="form-section">
      <h2>Experience</h2>
      {experienceInfo.map((exp, index) => {
        return <ExperienceForm
          key={index}
          index={index}
          experienceInfo={exp}
          onChange={(field, value) => handleChange(index, field, value)}
        />
      })}
      <button type="button" onClick={handleAddEducation}>Add Education</button>
    </form>
  );
}

export default ExperienceSection;