import React, { useState } from "react";
import Navbar from "../Navbar";
import styles from "./home.module.scss";
import { columns, data, options, statsData } from "./data";
import { Button, Input, Select, Table } from "antd";
import CreatProjectModal from "./Modal";
import { useEffect } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setprojects] = useState([]);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCreateProject = () => {
    setIsModalOpen(true);
  };
  const getCall = async()=>{
    try {
      const response = await fetch('https://oarfish-endless-foxhound.ngrok-free.app/api/v1/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response,"...response")
      // setprojects(response)
      // const data =  response.b.json();
      console.log('Project created successfully:', data);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setIsSubmitting(false);
    }
  }

  useEffect(()=>{
    getCall()
  },[])
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
