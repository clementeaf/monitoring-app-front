/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';

const STALE_TIME_MINUTES = 5;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * STALE_TIME_MINUTES,
    },
  },
});

function App() {
  const webSocketRef = useRef(null);

  useEffect(() => {
    webSocketRef.current = new WebSocket('ws://localhost:3000');
    return () => {
      webSocketRef.current.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (
      webSocketRef.current &&
      webSocketRef.current.readyState === WebSocket.OPEN
    ) {
      webSocketRef.current.send(JSON.stringify(message));
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Home sendMessage={sendMessage} />
    </QueryClientProvider>
  );
}

export default App;
