import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


import { PlayerApp } from './PlayerApp';

import { Provider } from 'react-redux';

import {store} from './store';


const root = document.getElementById('root') ;

ReactDOM.createRoot(root).render(<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <PlayerApp />
    </BrowserRouter>
  </Provider>
</React.StrictMode>);
