import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUserStories } from "../state/actions";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Home, Plus, Delete } from "mdi-material-ui";
const { ipcRenderer } = window.require("electron");

const UserStories = ({ dispatch, stories }) => {
  const handleClick = () => {
    //validation
    if (description.length === 0) {
      return setErr(true);
    }

    ipcRenderer.send("add-user-story", { description });
    requestUserStories();
  };

  const requestUserStories = () => {
    ipcRenderer.invoke("request-user-stories").then((docs) => {
      dispatch(setUserStories(docs));
    });
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const [err, setErr] = useState(false);

  const [description, setDescription] = useState("");

  useEffect(requestUserStories, []);

  return (
    <PageWrapper>
      <Typography variant="h1">User Stories</Typography>
      <Typography variant="h5">What is a 'user story'?</Typography>
      <Typography variant="subtitle1" paragraph>
        User stories are short, simple descriptions of a feature told from the
        perspective of the person who desires the new capability, usually a user
        or customer of the system. They typically follow a simple template:{" "}
      </Typography>
      <Typography variant="subtitle2" display="block" align="center">
        As a [type of user], I want [some goal] so that [some reason].
      </Typography>
      <TextField
        multiline
        placeholder="Enter a user story..."
        id="description"
        onChange={handleChange}
        value={description}
        rows={2}
        error={err}
        helperText={err ? "Please enter a user story" : null}
        fullWidth
      />
      <Grid container spacing={2}>
        <Grid item>
          <Button onClick={handleClick} startIcon={<Plus />}>
            Add User Story
          </Button>
        </Grid>
        <Grid item>
          <Button to="/" component={Link} startIcon={<Home />}>
            Home
          </Button>
        </Grid>
      </Grid>
      <Box mt={4}>
        <List>
          {stories &&
            stories.map((i, ind) => {
              return (
                <ListItem divider key={ind}>
                  <ListItemText primary={`#${ind + 1}`} secondary={i.story} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => {
                        ipcRenderer.send("remove-story", { id: i._id });
                        requestUserStories();
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
        </List>
      </Box>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  stories: state.userStories,
});

export default connect(mapStateToProps)(UserStories);
