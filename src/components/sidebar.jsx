import React from "react";
import { useResume } from "./ResumeContext";

export default function Sidebar() {
  const { setView, STORAGE_KEY } = useResume();

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset everything? This action cannot be undone."
    );
    if (confirmReset) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  return (
    <aside
      className="sidebar"
      aria-label="Sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      {/* Top Menu */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <button onClick={() => setView("form")}>📝 Fill Resume</button>
        </li>
        <li>
          <button onClick={() => setView("templates")}>🎨 Select Template</button>
        </li>
        <li>
          <button onClick={() => setView("preview")}>👀 Preview Resume</button>
        </li>
      </ul>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #374151",
          margin: "16px 0",
        }}
      />

      {/* Bottom Action */}
      <div style={{ marginTop: "auto" }}>
        <button
          onClick={handleReset}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            width: "100%",
          }}
        >
          🔄 Reset
        </button>
      </div>
    </aside>
  );
}
