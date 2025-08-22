import React, { useState } from "react";

const Form = ({ setFormData, setView }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    careerObjective:
      "To secure a challenging role where I can utilize my skills and contribute to the organization's growth.", // Default Career Objective
    education: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formValues);
    setView("templates");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill Your Resume Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <textarea
        name="careerObjective"
        placeholder="Career Objective"
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="education"
        placeholder="Education"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma-separated)"
        onChange={handleChange}
        required
      />
      <textarea
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Next: Select Template</button>
    </form>
  );
};

export default Form;
