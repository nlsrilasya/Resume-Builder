import React from "react";
import { useResume } from "./ResumeContext";
import { generateSnapshotPdf } from "../utils/pdf";
import { ModernBlock, SimpleBlock, TraditionalBlock } from "./templateBlocks";

export default function ResumePreview() {
  const { data, selectedTemplate, setSelectedTemplate } = useResume();

  if (!data || !data.name) {
    return <p>Please fill out the form and select a template to preview.</p>;
  }

  const Template =
    selectedTemplate === "modern"
      ? ModernBlock
      : selectedTemplate === "traditional"
      ? TraditionalBlock
      : SimpleBlock;

  const handleTemplateChange = (t) => {
    setSelectedTemplate(t);
  };

  return (
    <div className="resume-preview-wrapper">
      <div
        className="toolbar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* 🎨 Template Switcher */}
        {["simple", "modern", "traditional"].map((t) => (
          <button
            key={t}
            onClick={() => handleTemplateChange(t)}
            style={{
              background: selectedTemplate === t ? "#2563eb" : "#e5e7eb",
              color: selectedTemplate === t ? "#fff" : "#111",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}

        {/* ⬇️ Download Button */}
        <button
          onClick={() =>
            generateSnapshotPdf("resume-preview", `${data.name || "resume"}.pdf`)
          }
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Download PDF
        </button>
      </div>

      {/* Preview Area */}
      <div
        id="resume-preview"
        className={`resume-preview ${selectedTemplate}`}
        style={{
          background: "#fff",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Resume Preview ({selectedTemplate.charAt(0).toUpperCase() +
            selectedTemplate.slice(1)}{" "}
          Template)
        </h2>
        <div className="resume">
          <Template formData={data} />
        </div>
      </div>
    </div>
  );
}
