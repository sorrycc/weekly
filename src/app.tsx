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
    /*
      1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
      box-sizing: border-box;
    }

    /*
      2. Remove default margin
    */
    * {
      margin: 0;
    }

    /*
      3. Allow percentage-based heights in the application
    */
    html, body {
      height: 100%;
    }

    /*
      Typographic tweaks!
      4. Add accessible line-height
      5. Improve text rendering
    */
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      font-family: "Inter VF", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    /*
      6. Improve media defaults
    */
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }

    /*
      7. Remove built-in form typography styles
    */
    input, button, textarea, select {
      font: inherit;
    }

    /*
      8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }

    /*
      9. Create a root stacking context
    */
    #root, #__next {
      isolation: isolate;
    }

    ul {
      list-style: none;
      padding: 0;
    }
    
    a {
      color: #1d9bf0;
      &:hover {
        color: #b5495b !important;
      }
    }
  `;
  return (
    <div>
      <QueryClientProvider client={client}>{container}</QueryClientProvider>
      <GlobalStyle />
    </div>
  );
}
