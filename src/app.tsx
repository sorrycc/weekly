import { createGlobalStyle } from 'umi';
import { globalCSS } from 'docaid/client';

export const reactQuery = {
  queryClient: {
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey }: any) => {
          const res = await fetch(`/${queryKey.join('/')}`);
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }
          return res.json();
        },
      },
    },
  },
};

export const styledComponents = {
  GlobalStyle: createGlobalStyle`
    ${globalCSS}
  `,
};
