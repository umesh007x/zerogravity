import React, { useState } from "react";
import Navbar from "../Navbar";
import styles from "./home.module.scss";
import { columns, data, options, statsData } from "./data";
import { Button, Input, Select, Table } from "antd";
import CreatProjectModal from "./Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCreateProject = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.statsContainer}>
          {statsData.map((item, index) => (
            <div className={styles.statsBox} key={index}>
              <p className={styles.statsTitle}>{item.title}</p>
              <p className={styles.statsValue}>{item.value}</p>
            </div>
          ))}
          <div className={styles.Select}>
            <Select defaultValue="this month" options={options} size="large" />
          </div>
        </div>
        <div className={styles.tableInfo}>
          <div className={styles.tableTop}>
            <h1>Project List</h1>
            <div className={styles.tools}>
              <Input
                style={{ width: 400, marginRight: "2rem" }}
                size="large"
                placeholder="Search Project"
              />
              <Button onClick={handleCreateProject} type="primary" size="large" shape="round">
                Create
              </Button>
            </div>
          </div>
          <div className={styles.table}>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
      <CreatProjectModal isOpen={isModalOpen} handleOnCancel={handleCloseModal} />
    </>
  );
};

export default Home;
