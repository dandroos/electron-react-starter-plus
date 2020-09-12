import { SET_WHATS_INCLUDED_OPEN, SET_USER_STORIES } from "./types";

const initialState = {
  whatsIncludedOpen: false,
  userStories: [],
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_WHATS_INCLUDED_OPEN:
      newState.whatsIncludedOpen = payload;
      break;
    case SET_USER_STORIES:
      newState.userStories = payload;
      break;
    default:
      break;
  }

  return newState;
};
