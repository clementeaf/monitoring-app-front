/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import useAppRoutes from '../hooks/useAppRoutes';

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const routes = useAppRoutes();

  return (
    <div className="text-lg">
      <button type="button" onClick={() => setOpenMenu(!openMenu)}>
        <RxHamburgerMenu />
      </button>
      {openMenu && (
        <UnfoldMenu
          close={() => setOpenMenu(!openMenu)}
          routes={routes.filter(({ isInSideNav }) => isInSideNav)}
        />
      )}
    </div>
  );
}

function UnfoldMenu({ routes }) {
  return (
    <div
      className="absolute top-[77.5px] left-[15px] flex flex-col items-start justify-start 
                    py-4 px-6 min-w-[180px] bg-white z-[9999] text-black border 
                    border-black/10 rounded-lg shadow-lg"
    >
      {routes.map(({ id, path, name }, index) => (
        <li key={id} className="list-none">
          <NavLink to={path}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive ? 'text-black' : 'text-black/50'
                } font-light w-full py-2 ${
                  index === routes.length - 1 ? '' : 'border-b border-black/10'
                }`}
              >
                {name}
              </div>
            )}
          </NavLink>
        </li>
      ))}
    </div>
  );
}
