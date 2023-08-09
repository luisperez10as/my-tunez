import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PlayerPage } from "../pages/PlayerPage";
import { startLoadingArtist } from '../../store/artist';
import { useDispatch } from "react-redux";

const PlayerRoutes = () => {
  const dispatch = useDispatch();
  dispatch( startLoadingArtist() );

  return (
    <Routes>
      <Route path="/" element={<PlayerPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export { PlayerRoutes };
