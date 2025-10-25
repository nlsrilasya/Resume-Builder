import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { z } from "zod";

export const resumeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  careerObjective: z
    .string()
    .optional()
    .default(
      "To secure a challenging role where I can utilize my skills and contribute to the organization's growth."
    ),
  education: z.string().min(1, "Education is required"),
  skills: z.string().min(1, "Skills are required"),
  experience: z.string().min(1, "Experience is required"),
});

const STORAGE_KEY = "resume-builder-v2";

const defaultData = {
  name: "",
  email: "",
  phone: "",
  careerObjective:
    "To secure a challenging role where I can utilize my skills and contribute to the organization's growth.",
  education: "",
  skills: "",
  experience: "",
};

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...defaultData, ...JSON.parse(raw) } : defaultData;
    } catch {
      return defaultData;
    }
  });

  const [view, setView] = useState("form");
  const [selectedTemplate, setSelectedTemplate] = useState("simple");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const value = useMemo(
    () => ({
      data,
      setData,
      view,
      setView,
      selectedTemplate,
      setSelectedTemplate,
      STORAGE_KEY,
    }),
    [data, view, selectedTemplate]
  );

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}
