import React, { FC, useState } from "react";
import styles from "./createForm.module.scss";

interface CreateProjectFormProps {
  handleOnCancel: () => void;
}
const CreateProjectForm:FC<CreateProjectFormProps> = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    estimated_cost: '',
    estimated_hours: '',
    employee_cost: '',
    star_date: '',
    invoice_type: 'fixed_cost'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('https://oarfish-endless-foxhound.ngrok-free.app/api/v1/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const data = await response.json();
      console.log('Project created successfully:', data);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setIsSubmitting(false);
    }
    
    props.handleOnCancel()

    // Handle form submission, such as sending the data to a server
  };

  return (
    <form onSubmit={handleSubmit} className={styles.createFormContainer}>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Project Name</p>
        <input
          name="name"
          className={styles.input}
          placeholder="Enter project name here"
          value={formData.name}
          onChange={handleChange}
          
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Estimated Cost</p>
        <input
          name="estimated_cost"
          className={styles.input}
          placeholder="Enter cost here"
          value={formData.estimated_cost}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Estimated Hours</p>
        <input
          name="estimated_hours"
          className={styles.input}
          placeholder="Enter hours here"
          value={formData.estimated_hours}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Employee Cost</p>
        <input
          name="employee_cost"
          className={styles.input}
          placeholder="Enter employee cost here"
          value={formData.employee_cost}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Start Date</p>
        <input
          type="date"
          name="star_date"
          className={styles.input}
          value={formData.star_date}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Invoice Type</p>
        <select
          name="invoice_type"
          className={styles.input}
          value={formData.invoice_type}
          onChange={handleChange}
        >
          <option value="fixed_cost">Fixed</option>
          <option value="TM">T&M</option>
        </select>
      </div>
      <div className={styles.submitButton}>
      <button type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
