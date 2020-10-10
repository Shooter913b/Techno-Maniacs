import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Info from "components/Typography/Info.js";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Muted from "components/Typography/Muted.js";
// Sections for this page



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function MemberPage(props) {
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
      <Parallax filter image={require("assets/img/Members.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Member Info</h1>
              <h4>
                This is a page that is about each member of the Techno Maniacs!
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={6}>
            <NavPills
   color="info"
   tabs={[
     {
       tabButton: "Infant Elfrick",
       tabContent: (
         <span>
         <Muted>
             Aryan type here.
           </Muted>
           <br />
           <Muted>
              Aryan type here.
           </Muted>
           <br />
           <Muted>Aryan type here.</Muted>
         </span>
       )
     },
     {
       tabButton: "Madhav",
       tabContent: (
         <span>
           <Muted>
             Aryan type here.
           </Muted>
           <br />
           <Muted>
              Aryan type here.
           </Muted>
         </span>
       )
     },
     {
       tabButton: "Tanish",
       tabContent: (
         <span>
           <Muted>
             Aryan type here.
           </Muted>
           <br />
           <Muted>
             Aryan type here.
           </Muted>
         </span>
       )
     },
     {
       tabButton: "Aryan",
       tabContent: (
         <span>
           <Muted>
             Aryan type here.
           </Muted>
           <br />
           <Muted>
           Aryan type here.
           </Muted>
         </span>
       )
     }

   ]}
 />
);
}


            </GridItem>
          </GridContainer>
        </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
