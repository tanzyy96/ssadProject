import React from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItem,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewReleasesRoundedIcon from "@material-ui/icons/NewReleasesRounded";
import { useHistory } from "react-router-dom";
import getCurrentUser from "./getCurrentUser";
import getSprite from "./getSprite"

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 250,
    height: '100%',
    backgroundColor: theme.palette.primary.main
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  }
}));

const TemporaryDrawer = (props) => {
  const classes = useStyles();
  const user = getCurrentUser();
  const history = useHistory();
  let isTeacher = false;
  if (user) {
    isTeacher = user.isTeacher;
  }

  const onClickHandler = (option) => {
    if (option == "Logout") {
      localStorage.clear()
      history.push('/')
    } else if (option == "Profile") {
      history.push('/profile')
      props.toggleDrawer()
    }
  }

  return user ? (
    <Drawer open={props.open} anchor="left" onClose={props.toggleDrawer} className={classes.drawer}>
      <div className={classes.fullList}>
        {user &&
          <>
            <div className={classes.profile}>
              <img width={100} height={100} src={getSprite()} />
              <div>{user.userName}</div>
            </div>
            <Divider />
          </>
        }
        <List>
          {["Profile", "How to Play", "Logout"].map((text) => (
            <ListItem button key={text} onClick={() => onClickHandler(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {isTeacher &&
            <>
              <Divider />
              <ListItem button key={"class"} onClick={() => onClickHandler("class")}>
                <ListItemText primary={"My Classes"} />
              </ListItem>
            </>
          }

        </List>
      </div>
      {/* <Divider />
      {isTeacher ? (
        <div className={classes.fullList}>
          <List>
            <ListItem>
              <NewReleasesRoundedIcon color="error" />
              <ListItemText primary="For Teachers" style={{ paddingLeft: 10 }} />
            </ListItem>
            <ListItem button key={"class"} onClick={() => onClickHandler("class")}>
              <ListItemText primary={"My Classes"} />
            </ListItem>
          </List>
        </div>
      ) : null} */}
      {/* <Divider /> */}
    </Drawer>
  ) : null;
};

export default TemporaryDrawer;
