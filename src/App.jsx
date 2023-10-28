import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import { useEffect, useRef } from "react";

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
  
    webSocketRef.current.onopen = () => {
      console.log('WebSocket connected');
    };
  
    webSocketRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
    };
  
    webSocketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    webSocketRef.current.onclose = () => {
      console.log('WebSocket closed');
    };
  
    return () => {
      webSocketRef.current.close();
    };
  }, []);
  

  const sendMessage = (message) => {
    if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
      webSocketRef.current.send(JSON.stringify(message));
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Home sendMessage={sendMessage}/>
    </QueryClientProvider>
  )
}

export default App
