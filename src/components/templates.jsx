import React from "react";
import { useResume } from "./ResumeContext";

export default function Templates() {
  const { setSelectedTemplate, setView } = useResume();

  const pick = (t) => {
    setSelectedTemplate(t);
    setView("preview");
  };

  return (
    <div className="templates">
      <h2>Select a Resume Template</h2>

      <div className="grid">
        <button onClick={() => pick("simple")}>Simple Template</button>
        <button onClick={() => pick("modern")}>Modern Template</button>
        <button onClick={() => pick("traditional")}>Traditional Template</button>
      </div>

      <div className="actions" style={{ marginTop: "1.5rem" }}>
        <button
          onClick={() => setView("form")}
          style={{
            background: "#444",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "6px",
          }}
        >
          ← Back to Form
        </button>
      </div>
    </div>
  );
}
