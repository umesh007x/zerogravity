import React, { useState } from "react";
import styles from "./subscription.module.scss";
import { Button, Input, Select, Table } from "antd";
import { useEffect } from "react";
import Navbar from "../../Navbar";
import CreatProjectModal from "../Modal";
import { columns, data } from "./data";

const Subscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setprojects] = useState();
  const [projectData, setprojectData] = useState<any>();



  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCreateProject = () => {
    setIsModalOpen(true);
  };
   const statsData = [
    {
      title: "Total Project",
      value: projectData?.projects_count ?? 0
    },
    {
      title: "Revenue",
      value: projectData?.total_revenue ?? 0
    },
    {
      title: "Spent",
      value: projectData?.spent ?? 0
    },
    {
      title: "Profit",
      value: projectData?.total_profit ?? 0
    }
  ];
  

  useEffect(()=>{
    const getCall = async()=>{
      try {
        const response = await fetch('https://oarfish-endless-foxhound.ngrok-free.app/api/v1/subscriptions', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning':"true"
          },
        });
        
        const data = await response.json();
        setprojects(data.projects)
        setprojectData(data)
      } catch (err) {
        // setError(err.message);
      } finally {
        // setIsSubmitting(false);
      }
    }
    getCall()
  },[])
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.tableInfo}>
          <div className={styles.tableTop}>
            <h1>Subscription List</h1>
            <div className={styles.tools}>
              <Input
                style={{ width: 400, marginRight: "2rem" }}
                size="large"
                placeholder="Search Subscription"
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
      {/* <h1>Under Construction</h1> */}
      <CreatProjectModal isOpen={isModalOpen} handleOnCancel={handleCloseModal} />
    </>
  );
};

export default Subscription;
