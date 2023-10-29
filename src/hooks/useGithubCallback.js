/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useGithubCallback(setUserToken) {
  const navigate = useNavigate();
  const [showRedirecting, setShowRedirecting] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code != null) {
      setUserToken(code);
      setShowRedirecting(false);

      if (!showRedirecting) {
        navigate('/main');
      }
    }
  }, [setUserToken, showRedirecting, navigate]);

  return showRedirecting;
}
