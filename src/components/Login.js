import React, { useState } from "react";
import fire from "../fire";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(fire);
export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  async function registrarUsuario(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function submitHandler(e) {
    e.preventDefault();
    let re = /.{6}/;
    const email = e.target.elements.username.value,
      password = e.target.elements.password.value;
    if (!password.match(re)) {
      window.alert("La contraseña debe tener minimo 6 caracteres");
    } else {
      if (isRegister) {
        registrarUsuario(email, password);
      } else {
        signInWithEmailAndPassword(auth, email, password);
      }
    }
  }
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-b from-blue-400 to-purple-200 ">
      <form onSubmit={submitHandler}>
        <div className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 flex flex-col">
          <h1 className="font-bold text-center pb-2 text-xl text-blue-500">{
            isRegister ? "Registrar" : "Iniciar Sesion"
          }</h1>
          <div className="mb-4">

            <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
              Usuario
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" type="email" />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
              Contraseña
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password" />
          </div>
          <a className="mb-5  inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            olvidaste tu Contraseña?
          </a>
          <input className="btn-custom btn-primary" type="submit" value={
            isRegister ? "Registrar" : "Iniciar Sesion"
          } />
          <div className="flex items-center justify-around mt-6">
            <button className="btn-custom btn-second" type="button" onClick={
              () => setIsRegister(!isRegister)
            }>
              {
                isRegister ? "Ya tengo cuenta" : "Quiero registrarme"
              }
            </button>
          </div>
        </div>
      </form>
    </div>
  )

}