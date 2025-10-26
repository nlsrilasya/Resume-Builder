import React from "react";
import { useResume } from "./ResumeContext";
export default function Sidebar() {
  const { setView, data, STORAGE_KEY } = useResume();

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div>
        <h1>Resume Builder</h1>
        <ul>
          <li><button onClick={() => setView("form")}>Fill Resume</button></li>
          <li><button onClick={() => setView("templates")}>Select Template</button></li>
          <li><button onClick={() => setView("preview")}>Preview Resume</button></li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            if (window.confirm("Reset all data? This cannot be undone.")) {
              localStorage.removeItem(STORAGE_KEY);
              window.location.reload();
            }
          }}
        >
          Reset
        </button>
      </div>
    </aside>
  );
}
