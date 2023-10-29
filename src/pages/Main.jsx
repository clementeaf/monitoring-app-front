import React from 'react';
import Container from '../components/Container';
import CommitsInfo from '../components/Main/CommitsInfo';
import RepositoryInfo from '../components/Main/RepositoryInfo';
import GlobalProvider from '../context/GlobalProvider';

export default function Main() {
  return (
    <Container>
      <GlobalProvider state="Repository">
        <RepositoryInfo />
      </GlobalProvider>
      <GlobalProvider state="Commits">
        <CommitsInfo />
      </GlobalProvider>
    </Container>
  );
}
