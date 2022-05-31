import React from 'react';
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <header>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </header>
  );
}

export default Header;