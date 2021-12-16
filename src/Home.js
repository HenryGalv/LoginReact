import React, { Component } from "react";
import fire from "./fire";
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(fire);
export default function Home() {

  return (
    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-green-400 to-yellow-200 ">
      <h1 className="text-white text-2xl font-bold pb-3">BIENVENIDO</h1>
      <h2 className="pb-2 font-medium text-gris">Inicio Sesion con Exito</h2>
      <button onClick={() => signOut(auth)} className="btn-custom btn-third">
        Log Out
      </button>
    </div>
  )
}