import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { PlayerLayout } from '../layout/PlayerLayout';
import { ItemView, NothingSelectedView} from '../views';
import { setData } from '../../store/localstorage/';

const PlayerPage = () => {
  const dispatch = useDispatch();
  const {  active } = useSelector( state => state.artist );
  return (
    <PlayerLayout>
      
        {!!active?
        <ItemView/>:
        <NothingSelectedView/>
        }
       

     
    </PlayerLayout>
  );
};

export {PlayerPage};

