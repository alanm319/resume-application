import '../styles/FormInput.css'
function FormInput({id, label, type, onChange, value=''}) {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  )
}

export default FormInput;