import React from 'react';
import { Helmet } from 'react-helmet';
import { toHtml, Doc } from 'docaid/client';
import { useLocation } from 'umi';
// @ts-ignore
import singleDocMap from './singleDocMap';

export default function Page() {
  const { pathname } = useLocation();
  const html = toHtml(singleDocMap[pathname]);
  return (
    <div>
      <Helmet>
        <title>MDH 前端周刊</title>
      </Helmet>
      <Doc contentHtml={html} />
    </div>
  );
}
