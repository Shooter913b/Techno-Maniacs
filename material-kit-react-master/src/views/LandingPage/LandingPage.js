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

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.js";

// Sections for this page
import Blog from "./Sections/Blog.js";
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
var config = {
  apiKey: "AIzaSyAEq52oTk0_79uB5BhgOpbiGB_GbLVRqmk",
    authDomain: "technomaniacs-aab1e.firebaseapp.com",
    databaseURL: "https://technomaniacs-aab1e.firebaseio.com",
    projectId: "technomaniacs-aab1e",
    storageBucket: "technomaniacs-aab1e.appspot.com",
    messagingSenderId: "705094170140",
    appId: "1:705094170140:web:720fbdcab0868f8c7651d9",
    measurementId: "G-MDVE0H83EH"
};

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
      <Parallax filter image={require("assets/img/landing-bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Updates and Ideas</h1>
              <h4>
                This is where we will be posting robot updates and ideas we have. It will be updated every week on Saturdays.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Blog />

        </div>
      </div>
      <Footer />
    </div>
  );
}
