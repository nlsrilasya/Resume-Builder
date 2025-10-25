import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResume, resumeSchema } from "./ResumeContext";

export default function ResumeForm() {
  const { data, setData, setView } = useResume();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: data,
    resolver: zodResolver(resumeSchema),
    mode: "onChange",
  });

  const onSubmit = (values) => {
    setData(values);
    setView("templates");
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Fill Your Resume Details</h2>

      {/* Name */}
      <label>
        <span>Name</span>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && <em className="error">{errors.name.message}</em>}
      </label>

      {/* Email */}
      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && <em className="error">{errors.email.message}</em>}
      </label>

      {/* Phone */}
      <label>
        <span>Phone</span>
        <input
          type="text"
          placeholder="Phone"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <em className="error">{errors.phone.message}</em>}
      </label>

      {/* Career Objective */}
      <label>
        <span>Career Objective</span>
        <textarea
          placeholder="Career Objective"
          rows={3}
          {...register("careerObjective")}
        />
      </label>

      {/* Education */}
      <label>
        <span>Education</span>
        <input
          type="text"
          placeholder="Education"
          {...register("education")}
          aria-invalid={!!errors.education}
        />
        {errors.education && (
          <em className="error">{errors.education.message}</em>
        )}
      </label>

      {/* Skills */}
      <label>
        <span>Skills (comma-separated)</span>
        <input
          type="text"
          placeholder="React, JS, CSS"
          {...register("skills")}
          aria-invalid={!!errors.skills}
        />
        {errors.skills && <em className="error">{errors.skills.message}</em>}
      </label>

      {/* Experience */}
      <label>
        <span>Experience</span>
        <textarea
          placeholder="Experience"
          rows={5}
          {...register("experience")}
          aria-invalid={!!errors.experience}
        />
        {errors.experience && (
          <em className="error">{errors.experience.message}</em>
        )}
      </label>

      <div className="actions">
        <button type="submit" disabled={!isValid}>
          Next: Select Template
        </button>
      </div>
    </form>
  );
}
