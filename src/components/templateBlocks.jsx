import React from "react";

export function SimpleBlock({ formData }) {
  const skills = (formData.skills || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      color: "#111",
      lineHeight: 1.6,
      maxWidth: "700px",
      margin: "auto",
    }}>
      <h1 style={{
        fontSize: "28px",
        fontWeight: "700",
        textAlign: "center",
        color: "#1e3a8a"
      }}>{formData.name}</h1>
      <p style={{ textAlign: "center", color: "#374151" }}>
        {formData.email} | {formData.phone}
      </p>
      <hr style={{ margin: "12px 0" }} />
      <h2>Career Objective</h2>
      <p>{formData.careerObjective}</p>
      <h2>Education</h2>
      <p>{formData.education}</p>
      <h2>Skills</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none", padding: 0 }}>
        {skills.map((s, i) => (
          <li key={i} style={{
            background: "#e0f2fe",
            color: "#0369a1",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "13px"
          }}>{s}</li>
        ))}
      </ul>
      <h2>Experience</h2>
      <p>{formData.experience}</p>
    </div>
  );
}


export function ModernBlock({ formData }) {
  const skills = (formData.skills || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: "20px",
      fontFamily: "Inter, sans-serif",
    }}>
      <div style={{ background: "#1e3a8a", color: "white", padding: "24px", borderRadius: "10px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700" }}>{formData.name}</h1>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <h3 style={{ marginTop: "20px" }}>Skills</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {skills.map((s, i) => (
            <li key={i} style={{ margin: "4px 0" }}>• {s}</li>
          ))}
        </ul>
      </div>
      <div style={{ padding: "20px" }}>
        <section>
          <h2>Career Objective</h2>
          <p>{formData.careerObjective}</p>
        </section>
        <section>
          <h2>Education</h2>
          <p>{formData.education}</p>
        </section>
        <section>
          <h2>Experience</h2>
          <p>{formData.experience}</p>
        </section>
      </div>
    </div>
  );
}



export function TraditionalBlock({ formData }) {
  return (
    <div style={{
      border: "2px solid #000",
      padding: "24px",
      maxWidth: "700px",
      margin: "auto",
      fontFamily: "Georgia, serif",
      lineHeight: 1.5
    }}>
      <h1 style={{ textAlign: "center", fontSize: "26px" }}>{formData.name}</h1>
      <p style={{ textAlign: "center" }}>
        {formData.email} | {formData.phone}
      </p>
      <hr />
      <h2>Career Objective</h2>
      <p>{formData.careerObjective}</p>
      <h2>Education</h2>
      <p>{formData.education}</p>
      <h2>Skills</h2>
      <p>{formData.skills}</p>
      <h2>Experience</h2>
      <p>{formData.experience}</p>
    </div>
  );
}
