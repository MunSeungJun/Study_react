import React from "react";

const Header = (props) => {
  const {count} = props
  return (
    <header>
      <h1>
        <a href="/">{count}</a>
      </h1>
    </header>
  );
};

export default Header;
