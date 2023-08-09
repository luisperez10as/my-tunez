import { setTracks } from "./trackSlice";
import { loadTracks } from "../../helpers";

export const startLoadingTrack = (trackId) => {
  return async (dispatch, getState) => {
    const tracks = await loadTracks(trackId);
    dispatch(setTracks(tracks));
  };
};
