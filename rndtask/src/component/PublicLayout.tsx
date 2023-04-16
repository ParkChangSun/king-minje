import React, { ReactNode, useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import Main from '../page/Main';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <div className='flex flex-col h-screen'>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
