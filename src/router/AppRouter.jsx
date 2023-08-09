import { Route, Routes } from 'react-router-dom';
import { PlayerRoutes } from '../player/routes/PlayerRoutes';
import React from 'react';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PlayerRoutes />} />
    </Routes>
  );
};

export {AppRouter};
