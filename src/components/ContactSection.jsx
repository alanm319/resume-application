import FormInput from "./FormInput";
import '../styles/Section.css';
function ContactSection({contactInfo, setContactInfo}) {
  function handleChange(fieldName, value) {
    setContactInfo( prev => (
      {
      ...prev,
      [fieldName]: value
      }
    ));
  }

  return(
  <form className="form-section">
    <h2>Personal Details</h2>
    <FormInput 
      id="full-name-input"
      label="Full Name"
      type="text"
      onChange={value => handleChange("name", value)}
      value={contactInfo.name}
    />

    <FormInput 
      id="email-input"
      label="Email"
      type="email"
      onChange={value => handleChange("email", value)}
      value={contactInfo.email}
    />

    <FormInput 
      id="location-input"
      label="City, State"
      type="text"
      onChange={value => handleChange("location", value)}
      value={contactInfo.location}
    />
  </form>
  );
}

export default ContactSection;