import React, { useEffect, useState, useCallback } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as firebase from 'firebase';

const useStyles = makeStyles(styles);

const firebaseConfig = {
    apiKey: "AIzaSyAEq52oTk0_79uB5BhgOpbiGB_GbLVRqmk",
    authDomain: "technomaniacs-aab1e.firebaseapp.com",
    databaseURL: "https://technomaniacs-aab1e.firebaseio.com",
    projectId: "technomaniacs-aab1e",
    storageBucket: "technomaniacs-aab1e.appspot.com",
    messagingSenderId: "705094170140",
    appId: "1:705094170140:web:720fbdcab0868f8c7651d9",
    measurementId: "G-MDVE0H83EH"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function ProductSection() {
  const classes = useStyles();
  const ref = firebase.database().ref('posts');
  const [posts, setPosts] = useState([]);
  let tempPosts = [];
  ref.once('value', snap => {
    snap.forEach(childSnap => {
      let d = new Date(0);
      d.setUTCSeconds(childSnap.key);
      tempPosts.push(<Card style={{width: "50rem"}}>
            <CardBody>
              <h4 className={classes.cardTitle}>{d.toString()}</h4>
              <p>{childSnap.val()}</p>
            </CardBody>
          </Card>);
    });
  }).then(() => {
    setPosts(tempPosts);
  })
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Updates</h2>
          <div className={classes.container}>
          {posts}
        </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
