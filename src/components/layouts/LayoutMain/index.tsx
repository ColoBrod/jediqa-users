import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/hooks';

import './style.css';

// Components
import Tabs from '~/components/blocks/Tabs';

const LayoutMain = () => {
  return (
    <div className="layout layout-main">
      <div className="container">
        <Tabs />
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutMain;
