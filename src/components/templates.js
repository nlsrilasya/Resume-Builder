import React from "react";
const Templates = ({ setSelectedTemplate, setView }) => {
  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
    setView("preview"); // Move to preview after selecting template
  };

  return (
    <div className="templates">
      <h2>Select a Resume Template</h2>
      <button onClick={() => handleTemplateSelection("simple")}>
        Simple Template
      </button>
      <button onClick={() => handleTemplateSelection("modern")}>
        Modern Template
      </button>
      <button onClick={() => handleTemplateSelection("traditional")}>
        Traditional Template
      </button>
    </div>
  );
};

export default Templates;
