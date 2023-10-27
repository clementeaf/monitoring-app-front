/* eslint-disable react/prop-types */
import useGithubCallback from '../hooks/useGithubCallback';
import Container from './Container';

export default function GithubCallback({ setUserToken }) {
    const showRedirecting = useGithubCallback(setUserToken);
  
    return showRedirecting ? (
      <Container>Redirecting...</Container>
    ) : null;
  }