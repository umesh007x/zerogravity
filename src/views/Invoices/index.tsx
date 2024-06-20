import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import styles from "./invoices.module.scss";
import { Button, Input, Table } from "antd";
import axios from "axios";
import CreateInvoice from "./CreateInvoice";
import { invoiceColumns } from "./CreateInvoice/data";

const Invoices = () => {
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleCloseModal = () => {
    setIsCreateInvoiceOpen(false);
    getInvoices();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleCreateInvoice = () => {
    setIsCreateInvoiceOpen(true);
  };

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = () => {
    axios
      .get("https://oarfish-endless-foxhound.ngrok-free.app/api/v1/list_invoices", {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        }
      })
      .then((res) => {
        setData(res?.data);
      });
  };

  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.tableInfo}>
          <div className={styles.tableTop}>
            <h1>Invoices</h1>
            <div className={styles.tools}>
              <Input
                style={{ width: 400, marginRight: "2rem" }}
                size="large"
                placeholder="Search..."
              />
              <Button onClick={handleCreateInvoice} type="primary" size="large" shape="round">
                Create
              </Button>
            </div>
          </div>
          <div className={styles.table}>
            <Table columns={invoiceColumns} dataSource={data} />
          </div>
        </div>
      </div>
      <CreateInvoice isOpen={isCreateInvoiceOpen} handleOnCancel={handleCloseModal} />
    </>
  );
};

export default Invoices;
