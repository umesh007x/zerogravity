import { Col, Row } from "antd";
import React from "react";
// import LineChart from '../LineChart'
import Navbar from "../Navbar";
import PieChart from "../PieChart";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <Row gutter={[12, 12]}>
          <Col span={10}>
            <PieChart employeeCost={12000} actualCost={16000} subscriptionCost={2000} />
          </Col>
          <Col span={10}>
            {/* <LineChart growthData={[{month:"Novenmber", growth:1200},{month:"Jan", growth:12000},{month:"Feb", growth:2900}]} /> */}
            <PieChart employeeCost={12000} actualCost={16000} subscriptionCost={2000} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
