import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PlayerRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export { PlayerRoutes };
