import React from 'react';
import { Link } from 'umi';
import { usePosts } from '@/hooks/usePosts';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// @ts-ignore
import MarkdownIt from 'markdown-it';
import { Post } from '@/pages/weekly/$issue';

const md = new MarkdownIt({
  linkify: true,
  html: true,
});
const content = require('@/mds/mdh-weekly-introduce.md');
const html = md.render(content);

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
