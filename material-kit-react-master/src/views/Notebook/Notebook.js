import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import { Col, Row } from "reactstrap";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/server.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Engineering Notebook</h1>
              <h4>
                This is where we will show what we've been working on throughout the week.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        </div>
      </div>
      <Row>
      <Col>
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src="..."
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Engineering Notebook 2020-2021</h4>
          <p>This is our engineering notebook for the FTC Ultimate Goal season. Here we list what we worked on each day and we update it every week.</p>
          <Button
            color="info"
            href="https://docs.google.com/document/d/1ubyghXOy0mmd7vJJcCAhqUA_SviHI3itGXBu2WALqHE/edit#heading=h.mw59xkn7vuw1"
            target="_blank">
          View Notebook</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src="..."
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Engineering Notebook 2020-2021</h4>
          <p>This is our engineering notebook for the FTC Ultimate Goal season. Here we list what we worked on each day and we update it every week.</p>
          <Button
            color="info"
            href="https://docs.google.com/document/d/1ubyghXOy0mmd7vJJcCAhqUA_SviHI3itGXBu2WALqHE/edit#heading=h.mw59xkn7vuw1"
            target="_blank">
          View Notebook</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
      <Footer />
    </div>
  );
}
