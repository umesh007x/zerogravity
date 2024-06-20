import { Button, Modal, Select, notification } from "antd";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./createinvoice.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

interface CreateinvoiceProps {
  isOpen: boolean;
  handleOnCancel: () => void;
}

interface FormDataProps {
  milestone: string;
  description: string;
  amount: string;
}

interface ProjectsDataProps {
  id: number;
  name: string;
  invoice_type: string;
}

interface ProjectProps {
  value: number;
  name: string;
  type: string;
}
type NotificationType = "success" | "info" | "warning" | "error";

const CreateInvoice: FC<CreateinvoiceProps> = ({ isOpen, handleOnCancel }) => {
  const invoiceRef = useRef<HTMLInputElement>(null);
  const [api, contextHolder] = notification.useNotification();
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [invoiceType, setInvoiceType] = useState("fixed_cost");
  const [formData, setFormData] = useState<FormDataProps>({
    milestone: "",
    description: "",
    amount: ""
  });

  useEffect(() => {
    getProjects();
  }, []);

  const openNotificationWithIcon = (type: NotificationType, description: string) => {
    api[type]({
      message: "Created Successfully",
      description
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const formDataToSend = new FormData();

    const formDataToSend = new FormData();

    // Append fixed_cost_details from formData
    formDataToSend.append("fixed_cost_details", JSON.stringify(formData));

    // Append pdf_file
    formDataToSend.append("pdf_file", file ? file : "");
    axios
      .post(
        "https://oarfish-endless-foxhound.ngrok-free.app/api/v1/projects/1/invoices",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "true"
          }
        }
      )
      .then((res) => {
        handleCloseModal();
        openNotificationWithIcon(res?.status === 200 ? "success" : "error", res?.data?.message);
      });
  };

  const handleUploadInvoice = (invoiceRef: React.RefObject<HTMLInputElement>) => {
    if (invoiceRef.current) {
      invoiceRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file, "umesh");

    if (file) {
      setFile(file);
    }
  };
  const handleCloseModal = () => {
    handleOnCancel();
    setFile(undefined);
    setFormData({
      milestone: "",
      description: "",
      amount: ""
    });
    setInvoiceType("fixed_cost");
  };

  const getProjects = () => {
    axios
      .get("https://oarfish-endless-foxhound.ngrok-free.app/api/v1/projects", {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        }
      })
      .then((res) => {
        let projects = res?.data?.projects;
        projects = projects?.map((item: ProjectsDataProps) => ({
          value: item?.id,
          label: item?.name,
          type: item?.invoice_type
        }));
        setProjects(projects);
      });
  };

  const handleSelectProject = (value: number) => {
    const invoiceType = projects?.filter((item) => item?.value === value)[0]?.type;
    setInvoiceType(invoiceType);
  };

  return (
    <>
      {contextHolder}

      <Modal
        centered
        open={isOpen}
        onCancel={handleCloseModal}
        onClose={handleCloseModal}
        onOk={handleSubmit}
        okText="Create"
        title={invoiceType === "fixed_cost" ? "Fixed Cost" : "Time & Material"}>
        <>
          <div className={styles.inputContainer}>
            <p className={styles.inputTitle}>Select Project</p>
            <Select
              placeholder="Select Project"
              size="large"
              style={{ width: "100%" }}
              options={projects}
              onChange={handleSelectProject}
            />
          </div>

          <form onSubmit={handleSubmit} className={styles.createFormContainer}>
            {invoiceType === "fixed_cost" && (
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Milestone</p>
                <Select
                  placeholder="Select milestone"
                  size="large"
                  style={{ width: "100%" }}
                  options={[
                    { value: 1, label: "1" },
                    { value: 2, label: "2" }
                  ]}
                  onChange={(value) => {
                    setFormData({
                      ...formData,
                      milestone: value
                    });
                  }}
                />
              </div>
            )}

            {invoiceType !== "fixed_cost" && (
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Phase</p>
                <Select
                  placeholder="Select Phase"
                  size="large"
                  style={{ width: "100%" }}
                  options={[
                    { value: "dev", label: "development" },
                    { value: "UAT", label: "UAT" },
                    { value: "design", label: "Design" },
                    { value: "testing", label: "Testing" }
                  ]}
                />
              </div>
            )}

            <div className={styles.inputContainer}>
              <p className={styles.inputTitle}>Description</p>
              <input
                name="description"
                className={styles.input}
                placeholder="Enter description here"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div onClick={() => handleUploadInvoice(invoiceRef)} className={styles.uploadInput}>
              <p className={styles.inputTitle}>Invoice Upload</p>
              <input ref={invoiceRef} type="file" name="invoice" onChange={handleFileChange} />
              {file ? <span className={styles.file}>{file?.name} </span> : <></>}
              <UploadOutlined />
            </div>
            {invoiceType !== "fixed_cost" && (
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Estimated hours/Month</p>
                <input
                  name="description"
                  className={styles.input}
                  placeholder="Enter Est hr/mo here"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            )}
          </form>
        </>
      </Modal>
    </>
  );
};

export default CreateInvoice;
