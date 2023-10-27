import { QueryClient, QueryClientProvider } from "react-query";
import io from "socket.io-client";
import Home from "./pages/Home";
import { useLayoutEffect } from "react";

const socket = io("http://localhost:3000");

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
  useLayoutEffect(() => {
    socket.on("evento", (data) => {
      console.log("Datos recibidos:", data);
    });
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
