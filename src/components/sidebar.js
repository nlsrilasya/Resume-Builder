import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Sidebar = ({ setView, resumeData, selectedTemplate }) => {
  const handleDownload = () => {
    const resumeElement = document.getElementById("resume-preview");
    if (!resumeElement) {
      alert("No resume to download! Please preview first.");
      return;
    }

    html2canvas(resumeElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setView("form")}>Fill Resume</li>
        <li onClick={() => setView("templates")}>Select Template</li>
        <li onClick={() => setView("preview")}>Preview Resume</li>
      </ul>
    </div>
  );
};

export default Sidebar;
