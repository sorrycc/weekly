import React from 'react';

export const DocIndexTitle = (props: any) => {
  return (
    <>
      <strong>{props.doc.numberStr} 期</strong>：{props.doc.title}
    </>
  );
};
