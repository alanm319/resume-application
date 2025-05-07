import EducationForm from './EducationForm';
import '../styles/Section.css';

function EducationSection({educationInfo, setEducationInfo}) {

  function handleChange(index, fieldName, value) {
    setEducationInfo(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [fieldName]: value
      };
      return updated;
    });
  }

  function handleAddEducation() {
    setEducationInfo(prev => [
      ...prev,
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: ''
      }
    ]);
  }

  return (
    <form className="form-section">
      <h2>Education Details</h2>
      {educationInfo.map((edu, index) => {
        return <EducationForm
          key={index}
          index={index}
          educationInfo={edu}
          onChange={(field, value) => handleChange(index, field, value)}
        />
      })}
      <button type="button" onClick={handleAddEducation}>Add Education</button>
    </form>
  );
}

export default EducationSection;