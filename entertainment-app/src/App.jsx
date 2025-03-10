import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import { PrimeReactProvider } from "primereact/api";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <PrimeReactProvider>
        <AppLayout />
      </PrimeReactProvider>
    </QueryClientProvider>
  );
}

export default App;
