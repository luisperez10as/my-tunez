import { setAlbums } from "./albumSlice";
import {loadAlbums } from "../../helpers";

export const startLoadingAlbum = (artistId) => {
  return async (dispatch, getState) => {
    const albums = await loadAlbums(artistId);
    dispatch(setAlbums(albums));
  };};
