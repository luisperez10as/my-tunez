import { setArtists } from "./artistSlice";
import { loadArtists } from "../../helpers";

export const startLoadingArtist = () => {
  return async (dispatch, getState) => {
    const artists = await loadArtists();
    dispatch(setArtists(artists));
  };
};