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
         I've always had a passion for engineering and creating. I loved making things whether paper or plastic since I was 6. I started with simple paper crafts and went into lego. I did a bunch of lego engineering. I was always tinkering with lego technics or trying to add a cannon or an extra wing to my creations. From that point onwards I have always been engineering something here and there. When I was 9 my brother did FTC and it looked amazing! I went to every single scrimmage and every single meet to see what they were doing. I decided I wanted to do FLL but I never got the chance since I went to India for a bit. By the time I came back I was only one year away from being eligible for FTC so I asked a few of my friends if they wanted to do some FTC and some said yes. This led to my parents forming a team and we met in the summer after 6th grade and tried making a Rover Ruckus robot. We started off modest and kept building. Something about making has kept me in the engineering loop and the more and more I build the more and more addicting it gets!

           </Muted>
           <br />
         </span>
       )
     },
     {
       tabButton: "Madhav",
       tabContent: (
         <span>
           <Muted>
           My parents are both software engineers and I have always liked putting things together and trying different things out to see how they will turn out. Coding has always been very intriguing from a young age as well. And seeing my brother try out different tech challenges, I very much wanted to be part of one of those teams myself and work as a team to accomplish hard tasks, etc. When my friend Rick asked me to try out FTC I immediately said yes. I had prior experience in FLL, because of my brother and small groups here and there, which encouraged kids to start mechanical engineering and spark an interest. I was very compelled to join and was thinking about FTC before even being asked, and was ecstatic to work with friends to achieve things that I could only imagine as a kid. I asked my parents and they were very supportive and ended up joining in the 6th grade. Very early for FTC but we wanted to learn how to code in Java and how to do general mechanical engineering. We learned a ton and made a lot of first draft robots, and kept scrapping them and redoing them over and over again. It was very frustrating, yes, but it was very much worth the time and effort for we had learned a bunch as a whole about our strengths and our interests. I always had an interest in software, even more for hardware, and have started coding multiple times within my life, but always never stuck to it because of other activities. But I've taken a real initiative while within the year that I was in FTC and have stuck to learning code which will benefit me later in life. I’m very interested in how I and my team will do in the future, and hope that we improve for the better as the years go on!

           </Muted>
           <br />
         </span>
       )
     },
     {
       tabButton: "Tanish",
       tabContent: (
         <span>
           <Muted>
           The building is something I have always loved to do, whether that was building
           a video game electronically or building a big lego set.
            So when the time came when my close friend asked me to build robots with him in
            something called FTC, I said yes.
            FTC was the start of my love for engineering and soon I loved how I could
            code Java and prototype cool robot designs and functions. Today,
            FTC is one of the biggest things in my life and has made me like coding websites
           and video games and continued building model ships and board games.


           </Muted>
           <br />
         </span>
       )
     },
     {
       tabButton: "Aryan",
       tabContent: (
         <span>
           <Muted>
             Mechanical engineering is something I've always wanted to do,
              it is everything I dreamed about. Robotics has also always intrigued me,
               I saw big companies and universities all on the new, showcasing their robotic achievements.
               After seeing those I always thought “I want to be like those guys!”
               So FTC was my opportunity to do something I've always dreamed of and also a portal into my future.
           </Muted>
           <br />
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
