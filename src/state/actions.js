import { SET_WHATS_INCLUDED_OPEN, SET_USER_STORIES } from "./types";

export const setWhatsIncludedOpen = (payload) => ({
  type: SET_WHATS_INCLUDED_OPEN,
  payload,
});

export const setUserStories = (payload) => ({
  type: SET_USER_STORIES,
  payload,
});
