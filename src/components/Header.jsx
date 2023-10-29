/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import SideMenu from './SideMenu';

export default function Header({ cookie }) {
  const navigate = useNavigate();

  function handleSignOut() {
    Cookies.remove('user');
    navigate('/signIn');
  }

  return (
    <div className="flex w-full items-center justify-between py-2 px-4 bg-white border border-black/10 rounded-md shadow-md">
      <SideMenu />
      <p className="font-normal capitalize">{cookie}</p>
      <button
        type="button"
        className="px-4 py-2 rounded-md border border-black/20 hover:bg-black hover:text-white ease-in-out duration-300"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
