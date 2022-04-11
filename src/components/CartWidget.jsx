import '../App.css';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function SimpleBadge() {
  return (
    <div className='bolsa'>
    <Badge badgeContent={3} color="primary">
      <LocalMallIcon color="action"/>
    </Badge>
    </div>
  );
}

