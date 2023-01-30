import React from 'react';
import { Helmet } from 'react-helmet';
import { toHtml, Doc } from 'docaid/client';
import { useDocAidConfig, useLocation } from 'umi';
// @ts-ignore
import singleDocMap from './singleDocMap';

export default function Page() {
  const { pathname } = useLocation();
  const config = useDocAidConfig();
  const { attributes, html } = singleDocMap[pathname];
  return (
    <div>
      <Helmet>
        <title>{`${attributes?.title ? `${attributes.title} - ` : ''}${
          config.title
        }`}</title>
      </Helmet>
      <Doc contentHtml={html} />
    </div>
  );
}
