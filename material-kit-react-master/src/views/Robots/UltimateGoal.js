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
import Carousel from "views/Carousels/CarouselUlt.js";
import { Col, Row } from "reactstrap";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Sections for this page



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
        brand="Techno Maniacs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/ultimate-goal.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Ultimate Goal 2020-2021</h1>
              <h4>
                This is a very different year for FTC because of the Covid-19 Pandemic. The 2020-2021
                <a href="https://www.youtube.com/watch?v=H3V3A7CgwPU" target="_blank"> Ultimate Goal </a>
                season is the current season we are participating in, so expect weekly updates.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
        <div className={classes.container}>
        <Row>
        <Col>
        <Card style={{width: "50rem"}}>
          <CardBody>
            <h4 className={classes.cardTitle}>SkyStone Robot</h4>
            <p>Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.</p>
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
            Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.Aryan type here.
          </CardBody>
        </Card>
        <Carousel />
        </Col>
        </Row>
        </div>
      <Footer />
    </div>
  );
}
