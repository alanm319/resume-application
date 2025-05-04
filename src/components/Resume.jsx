import '../styles/Resume.css'
function Resume({contactInfo, educationInfo, workInfo}) {
  return (
    <div className="resume-container">
      {/* contact info */}
      <h2 className="resume-header">{contactInfo.name}</h2>
      <div className="contact-info">
        {contactInfo.email && (<span>{contactInfo.email}</span>)}
        {contactInfo.location && (<span>{contactInfo.location}</span>)}
      </div>

      {/* education info */}
      {educationInfo.length > 0 && (
        <div className="resume-section">
          <h3>Education</h3>
          {educationInfo.map((edu, index) => (
            <div key={index} className="resume-item">
              <div className="resume-item-title">
                <strong>{edu.school}</strong>, {edu.degree}
              </div>
              <div className="resume-item-subtitle">
                {edu.startDate} - {edu.endDate}
              </div>
              <div>{edu.location}</div>
            </div>
          ))}
        </div>
      )}

      {/* work info */}
      {workInfo.length > 0 && (
        <div className="resume-section">
          <h3>Experience</h3>
          {workInfo.map((job, index) => (
            <div key={index} className="resume-item">
              <div className="resume-item-title">
                <strong>{job.company}</strong>, {job.position}
              </div>
              <div className="resume-item-subtitle">
                {job.startDate} - {job.endDate}
              </div>
              <div>{job.location}</div>
              {job.description && <p>{job.description}</p>}
            </div>
          ))}
        </div>
      )}

    </div>
  );
} 

export default Resume;