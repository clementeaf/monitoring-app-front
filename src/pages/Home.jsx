/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import Cookies from 'js-cookie';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import useAppRoutes from '../hooks/useAppRoutes';
import Header from '../components/Header';
import NotFound from './NotFound';
import GlobalProvider from '../context/GlobalProvider';

export default function Home({ sendMessage }) {
  const routes = useAppRoutes();
  const navigate = useNavigate();
  const location = useLocation();
  const [cookie, setCookie] = useState(null);

  const contextMapping = {
    '/repositoryInfo': 'Repository',
    '/commits': 'Commits',
  };

  const getCredentialsFromCookies = () => {
    const savedUser = Cookies.get('user');
    if (savedUser) {
      setCookie(savedUser);
    } else {
      navigate('/signIn');
    }
  };

  useEffect(() => {
    getCredentialsFromCookies();
    sendMessage({ type: 'subscribe', channel: 'monitoringApp' });
    return () => {
      sendMessage({ type: 'unsubscribe', channel: 'monitoringApp' });
    };
  }, [sendMessage]);

  const contextName = contextMapping[location.pathname];

  return (
    <div
      className={`flex flex-col min-h-screen min-w-screen ${
        cookie === null || location.pathname === '/signIn' && 'justify-center'
      } bg-gray-100 p-4`}
    >
      <GlobalProvider state={contextName}>
        <Suspense>
          {cookie !== null && location.pathname !== '/signIn' && (
            <Header cookie={cookie} />
          )}
          <div className="flex flex-col h-full w-full items-center justify-start">
            <Routes>
              {routes.map(
                ({ id, path, component: Component, isIndex, isExact }) => (
                  <Route
                    key={id}
                    path={path}
                    element={
                      <div className="flex items-start justify-start p-4">
                        <Component />
                      </div>
                    }
                    index={isIndex}
                    exact={isExact}
                  />
                )
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </GlobalProvider>
    </div>
  );
}
