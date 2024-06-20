import React, { useState } from "react";
import styles from "./createForm.module.scss";

const CreateProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    estimatedCost: '',
    estimatedHours: '',
    employeeCost: '',
    startDate: '',
    invoiceType: 'Fixed'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, such as sending the data to a server
  };

  return (
    <form onSubmit={handleSubmit} className={styles.createFormContainer}>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Project Name</p>
        <input
          name="projectName"
          className={styles.input}
          placeholder="Enter project name here"
          value={formData.projectName}
          onChange={handleChange}
          
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Estimated Cost</p>
        <input
          name="estimatedCost"
          className={styles.input}
          placeholder="Enter cost here"
          value={formData.estimatedCost}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Estimated Hours</p>
        <input
          name="estimatedHours"
          className={styles.input}
          placeholder="Enter hours here"
          value={formData.estimatedHours}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Employee Cost</p>
        <input
          name="employeeCost"
          className={styles.input}
          placeholder="Enter employee cost here"
          value={formData.employeeCost}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Start Date</p>
        <input
          type="date"
          name="startDate"
          className={styles.input}
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Invoice Type</p>
        <select
          name="invoiceType"
          className={styles.input}
          value={formData.invoiceType}
          onChange={handleChange}
        >
          <option value="Fixed">Fixed</option>
          <option value="T&M">T&M</option>
        </select>
      </div>

      <button type="submit" hidden className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default CreateProjectForm;
