import '../App.css';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from "./CartContext"
import { useContext } from 'react';

export default function SimpleBadge() {
  const notificacion = useContext(CartContext)

  return (
    <div className='bolsa'>
    <Badge badgeContent={ notificacion.cantItems() } color="primary">
      <LocalMallIcon color="action"/>
    </Badge>
    </div>
  );
}

