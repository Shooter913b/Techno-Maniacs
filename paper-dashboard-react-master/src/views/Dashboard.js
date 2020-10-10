/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  InputGroup,
   InputGroupAddon,
    InputGroupText,
    Input,Button
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row>
        <Col lg="9">
        <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Content</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" type="textarea"/>
              </InputGroup>
</Col>
<Col lg="3" >
<Button >Post</Button>
</Col>
</Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
