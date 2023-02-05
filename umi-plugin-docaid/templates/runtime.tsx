import { createGlobalStyle, useDocAidTheme } from 'umi';
import { globalCSS } from 'docaid/client';

export function rootContainer(container: any) {
  const theme = useDocAidTheme();
  const GlobalStyle = createGlobalStyle`
    ${theme.globalCSS || globalCSS}
  `;
  return (
    <>
      <GlobalStyle />
      {container}
    </>
  );
}
