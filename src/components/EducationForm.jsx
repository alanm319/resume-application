import FormInput from "./FormInput";
import '../styles/Section.css';

function EducationForm({index, educationInfo, onChange}) {

  return(
    <>
      <h2>Education {index + 1}</h2>
      <FormInput 
        id={`school-input-${index}`}
        label="School"
        type="text"
        onChange={value => onChange("school", value)}
        value={educationInfo.school}
      />

      <FormInput
        id={`degree-input-${index}`}
        label="degree"
        type="text"
        onChange={value => onChange("degree", value)}
        value={educationInfo.degree}
      />

      <FormInput
        id={`location-input-${index}`}
        label="location"
        type="text"
        onChange={value => onChange("location", value)}
        value={educationInfo.location}
      />

      <FormInput
        id={`startDate-input-${index}`}
        label="Start Date"
        type="month"
        onChange={value => onChange("startDate", value)}
        value={educationInfo.startDate}
      />

      <FormInput
        id={`endDate-input-${index}`}
        label="End Date"
        type="month"
        onChange={value => onChange("endDate", value)}
        value={educationInfo.endDate}
      />
    </>
    );
}

export default EducationForm;