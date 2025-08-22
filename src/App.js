import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/resumePreview";
import Templates from "./components/templates";
import "./styles.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    careerObjective: "",
    education: "",
    skills: "",
    experience: "",
  });

  const [view, setView] = useState("form"); // Controls the visible section
  const [selectedTemplate, setSelectedTemplate] = useState("simple"); // Stores selected template

  return (
    <div className="app-container">
      <Sidebar setView={setView} />
      <div className="content">
        {view === "form" && (
          <ResumeForm
            formData={formData}
            setFormData={setFormData}
            setView={setView}
          />
        )}
        {view === "templates" && (
          <Templates
            setSelectedTemplate={setSelectedTemplate}
            setView={setView}
          />
        )}
        {view === "preview" && (
          <ResumePreview
            formData={formData}
            selectedTemplate={selectedTemplate}
          />
        )}
      </div>
    </div>
  );
};

export default App;
