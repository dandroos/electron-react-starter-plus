import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Button,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import Redux from "../ReduxIcon";
import {
  Link,
  React as ReactIcon,
  MaterialUi,
  VectorSquare,
  Animation,
  Database,
  ElectronFramework,
} from "mdi-material-ui";
import { setWhatsIncludedOpen } from "../../state/actions";
const electron = window.require("electron");

const WhatsIncluded = ({ dispatch, isOpen }) => {
  const handleClose = () => {
    dispatch(setWhatsIncludedOpen(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>What's included?</DialogTitle>
      <DialogContent>
        <List>
          <Feature
            title="Electron"
            Icon={ElectronFramework}
            url="https://electronjs.org"
          />
          <Feature
            title="React (create-react-app)"
            Icon={ReactIcon}
            url="https://reactjs.org"
          />
          <Feature
            title="Redux"
            Icon={Redux}
            url="https://react-redux.js.org/"
          />
          <Feature
            title="Material-UI"
            Icon={MaterialUi}
            url="https://material-ui.com"
          />
          <Feature
            title="Material Design Icons"
            Icon={VectorSquare}
            url="https://materialdesignicons.com"
          />
          <Feature
            title="Animations (Framer Motion)"
            Icon={Animation}
            url="https://framer.com"
          />
          <Feature
            title="NeDB"
            Icon={Database}
            url="https://github.com/louischatriot/nedb"
          />
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Feature = ({ title, Icon, url }) => {
  const handleClick = (e) => {
    e.preventDefault();
    electron.shell.openExternal(url);
  };
  return (
    <ListItem divider>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <Tooltip title="Open link">
          <IconButton onClick={handleClick} color="primary">
            <Link />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.whatsIncludedOpen,
});

export default connect(mapStateToProps)(WhatsIncluded);
