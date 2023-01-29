import React from 'react';
import Balancer from 'react-wrap-balancer';
import {
  Article,
  Toc as TocStyledComponent,
  Doc as DocStyledComponent,
} from './styledComponents';

type ITocData = {
  content: string;
  slug: string;
  lvl: number;
  i: number;
  seen: number;
}[];

type IToc = {
  data: ITocData;
  leftPadding?: number;
};

function Toc(props: { toc: IToc }) {
  return (
    <div>
      {props.toc.data.map((item) => {
        return (
          <div
            key={`toc-${item.content}`}
            style={{
              paddingLeft: (item.lvl - 2) * (props.toc.leftPadding || 40),
            }}
          >
            <a href={`#${item.slug}`}>{item.content}</a>
          </div>
        );
      })}
    </div>
  );
}

function Image(props: { className?: string; src: string; alt?: string }) {
  return (
    <div className={props.className}>
      <div className="image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="caption">题图：{props.alt}。</div>
    </div>
  );
}

// TODO: support remote contentHtml
export function Doc(props: {
  title?: {
    content: string;
    balance?: boolean;
  };
  toc?: IToc;
  publishedAt?: string;
  headImg?: {
    src: string;
    alt?: string;
  };
  contentHtml: string;
  styledComponents?: {
    Article?: React.FC;
    Toc?: React.FC;
    Doc?: React.FC;
  };
}) {
  const ArticleComponent = props.styledComponents?.Article || Article;
  const TocComponent = props.styledComponents?.Toc || TocStyledComponent;
  const DocComponent = props.styledComponents?.Doc || DocStyledComponent;
  return (
    <DocComponent>
      {props.toc && (
        <TocComponent>
          <Toc toc={props.toc} />
        </TocComponent>
      )}
      {props.title &&
        (props.title.balance ? (
          <h1>
            <Balancer>{props.title.content}</Balancer>
          </h1>
        ) : (
          <h1>{props.title.content}</h1>
        ))}
      {props.publishedAt && (
        <div className="publishedAt">{props.publishedAt}</div>
      )}
      {props.headImg && (
        <Image
          className="headImg"
          src={props.headImg.src}
          alt={props.headImg.alt}
        />
      )}
      {props.contentHtml && (
        <ArticleComponent
          dangerouslySetInnerHTML={{
            __html: props.contentHtml,
          }}
        />
      )}
    </DocComponent>
  );
}
