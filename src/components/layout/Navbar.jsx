// UI: Boton configura para redirección a hotmart
import Button from "../common/Button";
import logo from '../../assets/images/common/logo.png';
import React from 'react';

export default function Navbar() {
  return (
      <nav className="flex justify-center items-center luz-neon-borde  bg-slate-950">
        <img src={logo} className="h-30 m-0 p-0" alt="" />
      </nav>
  )
}
