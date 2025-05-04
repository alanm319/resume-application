import FormInput from "./FormInput";
import '../styles/Section.css';

function EducationSection({educationInfo, setEducationInfo}) {
  // TODO: change logic
  function handleChange(fieldName, value) {
    setEducationInfo(prev => {
      const updated = [...prev];
      updated[0] = {
        ...updated[0],
        [fieldName]: value
      };
      return updated;
    });
  }

  // TODO: change handleChange logic
  return(
    <form className="form-section">
      <h2>Education Details</h2>
      <FormInput 
        id="school-input"
        label="School"
        type="text"
        onChange={value => handleChange("school", value)}
        value={educationInfo[0].school}
      />

      <FormInput
        id="degree-input"
        label="degree"
        type="text"
        onChange={value => handleChange("degree", value)}
        value={educationInfo[0].degree}
      />

      <FormInput
        id="location"
        label="location"
        type="text"
        onChange={value => handleChange("location", value)}
        value={educationInfo[0].location}
      />

      <FormInput
        id="startDate"
        label="Start Date"
        type="month"
        onChange={value => handleChange("startDate", value)}
        value={educationInfo[0].startDate}
      />

      <FormInput
        id="endDate"
        label="End Date"
        type="month"
        onChange={value => handleChange("endDate", value)}
        value={educationInfo[0].endDate}
      />
    </form>
    );
}

export default EducationSection;