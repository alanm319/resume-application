import FormInput from "./FormInput";
import '../styles/Section.css';

function ExperienceForm({index, experienceInfo, onChange}) {

  return(
    <>
      <h2>Experience {index + 1}</h2>
      <FormInput 
        id={`title-input-${index}`}
        label="Title"
        type="text"
        onChange={value => onChange("title", value)}
        value={experienceInfo.title}
      />

      <FormInput
        id={`company-input-${index}`}
        label="company"
        type="text"
        onChange={value => onChange("company", value)}
        value={experienceInfo.company}
      />

      <FormInput
        id={`location-input-${index}`}
        label="location"
        type="text"
        onChange={value => onChange("location", value)}
        value={experienceInfo.location}
      />

      <FormInput
        id={`startDate-input-${index}`}
        label="Start Date"
        type="month"
        onChange={value => onChange("startDate", value)}
        value={experienceInfo.startDate}
      />

      <FormInput
        id={`endDate-input-${index}`}
        label="End Date"
        type="month"
        onChange={value => onChange("endDate", value)}
        value={experienceInfo.endDate}
      />

      <div className="description-field">
        <label htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          placeholder="Enter a description..."
          onChange={event => onChange("description",event.target.value)}
        />
      </div>
    </>
    );
}

export default ExperienceForm;