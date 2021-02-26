import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.image}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
