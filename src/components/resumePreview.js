import React from "react";
import jsPDF from "jspdf";

const ResumePreview = ({ formData, selectedTemplate }) => {
  if (!formData || !formData.name) {
    return <p>Please fill out the form and select a template to preview.</p>;
  }

  const handleDownload = () => {
    const doc = new jsPDF();

    // Styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);

    // Name (Centered for all templates)
    const name = formData.name.toUpperCase();
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth(name);
    doc.text(name, (pageWidth - textWidth) / 2, 20);

    // Add HR After Name for Traditional Template
    if (selectedTemplate === "traditional") {
      doc.setDrawColor(0);
      doc.line(20, 25, pageWidth - 20, 25); // Horizontal line after the name
    }

    // Contact Info (Aligned based on template)
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    if (selectedTemplate === "traditional") {
      doc.text(`Email: ${formData.email}`, 20, 35);
      doc.text(`Phone: ${formData.phone}`, 20, 45);
    } else {
      doc.text(`Email: ${formData.email} | Phone: ${formData.phone}`, 20, 30);
    }

    // Add HR after Contact Info for all templates
    doc.line(20, 50, pageWidth - 20, 50);

    // Resume Sections
    const sections = [
      { title: "Career Objective", content: formData.careerObjective },
      { title: "Education", content: formData.education },
      { title: "Skills", content: formData.skills },
      { title: "Experience", content: formData.experience },
    ];

    let y = 60;
    sections.forEach((section) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(section.title + ":", 20, y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const textLines = doc.splitTextToSize(section.content, 160);
      doc.text(textLines, 60, y);
      y += textLines.length * 6 + 4;
    });

    doc.save("resume.pdf");
  };

  return (
    <div className={`resume-preview ${selectedTemplate}`}>
      <h2>Resume Preview ({selectedTemplate} Template)</h2>
      <div className="resume">
        {/* Modern Template */}
        {selectedTemplate === "modern" && (
          <div className="modern-template">
            <h1 className="resume-name">{formData.name.toUpperCase()}</h1>
            <p>
              {formData.email} | {formData.phone}
            </p>
            <hr />
            <h2>Career Objective</h2>
            <p>{formData.careerObjective}</p>
            <h2>Education</h2>
            <p>{formData.education}</p>
            <h2>Skills</h2>
            <p>
              {formData.skills
                .split(",")
                .map((skill) => skill.trim())
                .join(" | ")}
            </p>
            <h2>Experience</h2>
            <p>{formData.experience}</p>
          </div>
        )}

        {/* Traditional Template */}
        {selectedTemplate === "traditional" && (
          <div className="traditional-template">
            <h1 className="resume-name">{formData.name.toUpperCase()}</h1>
            <hr />
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <hr />
            <h2>Career Objective</h2>
            <p>{formData.careerObjective}</p>
            <h2>Education</h2>
            <p>{formData.education}</p>
            <h2>Skills</h2>
            <p>{formData.skills}</p> {/* Replacing list with plain text */}
            <h2>Experience</h2>
            <p>{formData.experience}</p>
          </div>
        )}
        {/* Simple Template */}
        {selectedTemplate === "simple" && (
          <div className="simple-template">
            <h1 className="resume-name">{formData.name.toUpperCase()}</h1>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <hr />
            <h2 style={{ textAlign: "left" }}>Career Objective</h2>
            <p>{formData.careerObjective}</p>
            <h2 style={{ textAlign: "left" }}>Education</h2>
            <p>{formData.education}</p>
            <h2 style={{ textAlign: "left" }}>Skills</h2>
            <p>{formData.skills}</p>
            <h2 style={{ textAlign: "left" }}>Experience</h2>
            <p>{formData.experience}</p>
          </div>
        )}
      </div>
      <button className="download-btn" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
  );
};

export default ResumePreview;
