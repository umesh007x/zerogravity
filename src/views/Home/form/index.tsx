import React, { useRef } from "react";
import styles from "./createForm.module.scss";
import { UploadOutlined } from "@ant-design/icons";

const CreateProjectForm = () => {
  const invoiceInputRef = useRef<HTMLInputElement>(null);
  const etInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={styles.createFormContainer}>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Project Name</p>
        <input className={styles.input} placeholder="Enter admin name here" />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Estimated Cost</p>
        <input className={styles.input} placeholder="Enter Cost here" />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Estimated Hours</p>
        <input className={styles.input} placeholder="Enter Hour here" />
      </div>

      <div onClick={() => handleUpload(invoiceInputRef)} className={styles.uploadInput}>
        <p className={styles.inputTitle}>Upload Invoice</p>
        <input name="invoice" ref={invoiceInputRef} type="file" className={styles.input} />
        <UploadOutlined />
      </div>

      <div onClick={() => handleUpload(etInputRef)} className={styles.uploadInput}>
        <p className={styles.inputTitle}>Upload ET</p>
        <input ref={etInputRef} name="et" type="file" className={styles.input} />
        <UploadOutlined />
      </div>
    </div>
  );
};

export default CreateProjectForm;
