import { createGlobalStyle } from 'umi';
import { globalCSS } from 'docaid/client';

const GlobalStyle = createGlobalStyle`
  ${globalCSS}
`;

export function rootContainer(container: any) {
  return (
    <>
      <GlobalStyle />
      {container}
    </>
  );
}
