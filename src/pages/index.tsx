import React from 'react';
import { Helmet } from 'react-helmet';
import { Post } from '@/pages/weekly/$issue';
import { toHtml } from 'docaid/client';

const content = require('@/mds/mdh-weekly-introduce.md');
const html = toHtml(content);

export default function Page() {
  return (
    <div>
      <Helmet>
        <title>MDH 前端周刊</title>
      </Helmet>
      <Post
        dangerouslySetInnerHTML={{
          __html: html
            // @ts-ignore
            .replace('%LAST_NUMBER%', LAST_NUMBER)
            .replace('%LAST_PUBLISHED_AT%', LAST_PUBLISHED_AT),
        }}
      />
    </div>
  );
}
