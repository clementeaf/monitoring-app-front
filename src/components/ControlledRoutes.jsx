/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ControlledRoutes({ userToken, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken == null || userToken === undefined) {
      navigate('/auth/github');
    }
  }, [userToken, navigate]);

  return <>{children}</>;
}
