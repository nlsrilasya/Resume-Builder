import React from "react";
import Sidebar from "./components/sidebar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/resumePreview";
import Templates from "./components/templates";
import { ResumeProvider, useResume } from "./components/ResumeContext";
import "./styles.css";

function Main() {
const { view } = useResume();
return (
<div className="app-container">
<Sidebar />
<div className="content" role="main">
{view === "form" && <ResumeForm />}
{view === "templates" && <Templates />}
{view === "preview" && <ResumePreview />}
</div>
</div>
);
}


export default function App() {
return (
<ResumeProvider>
<Main />
</ResumeProvider>
);
}