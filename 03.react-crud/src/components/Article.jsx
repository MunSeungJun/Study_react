import React from 'react';

const Article = ({select, mode}) => {
  return (
    <>
      <h1>{mode}</h1>
      <p>{select.body}</p>
    </>
  );
};

export default Article;
