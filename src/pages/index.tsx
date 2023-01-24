import React from 'react';
import { Helmet } from 'react-helmet';
import { Post } from '@/pages/weekly/$issue';
import { renderMarkdown } from '@/utils/mdUtils';

const content = require('@/mds/mdh-weekly-introduce.md');
const html = renderMarkdown(content);

export default function Page() {
  return (
    <div>
      <Helmet>
        <title>MDH 前端周刊</title>
      </Helmet>
      <Post
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}
