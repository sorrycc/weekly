import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';

const API_SERVER = '';
const client = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const res = await fetch(`${API_SERVER}/${queryKey.join('/')}`);
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      },
    },
  },
});

export function rootContainer(container: any) {
  const GlobalStyle = createGlobalStyle`
    body {
    }
  `;
  return (
    <div>
      <QueryClientProvider client={client}>{container}</QueryClientProvider>
      <GlobalStyle />
    </div>
  );
}
