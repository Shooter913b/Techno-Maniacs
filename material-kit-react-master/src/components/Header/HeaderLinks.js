/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Motorcycle, Info, PowerSettingsNew, Subject, Update, PeopleAlt } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Robots"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Motorcycle}
          dropdownList={[
            <Link to="/skystone" className={classes.dropdownLink}>
              2019-2020 Skystone
            </Link>,
            <Link to="/ult-goal" className={classes.dropdownLink}>
              2020-2021 Ultimate Goal
            </Link>,
            <Link to="/tbd-page" className={classes.dropdownLink}>
              2021-2022 TBD
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
            <Info className={classes.icons} /> About
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="/members-page"
            color="transparent"
            className={classes.navLink}
          >
            <PeopleAlt className={classes.icons} /> Member Info
          </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/blog-page"
          color="transparent"
          className={classes.navLink}
        >
          <Update className={classes.icons} /> Updates and Ideas
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/eng-notebook"
          color="transparent"
          className={classes.navLink}
        >
        <Subject className={classes.icons} /> Engineering Notebook
      </Button>
    </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login-page"
          color="transparent"
          className={classes.navLink}
        >

          <PowerSettingsNew className={classes.icons} /> Log out
        </Button>
      </ListItem>
    </List>
  );
}
