import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import { useEffect } from "react";

const socket = new WebSocket('ws://localhost:3000');
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
  useEffect(() => {
    socket.on
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
