import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";
import Modal from "react-modal";
import React from "react";
import TutorialVideo from "../components/modals/TutorialVideo";


export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const emailVerified = new URLSearchParams(location.search).get('verified') === 'true';
  const reset = new URLSearchParams(location.search).get('reset') === 'true';
  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/login", {
        email,
        password,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        navigate('/'); // Navigate to homepage after successful login
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          setError({ __html: finalErrors.join("<br>") });
        } else {
          setError({ __html: "Credenciais inválidas." });
        }
        console.error(error);
      });
  };


  // 22/08 - implemetanção do modal com o vídeo
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

  const openModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const closeModalRegister = () => {
    setIsModalOpenRegister(false);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Entre com sua conta.
            </h2>

            <p className="mt-2 text-center text-sm text-gray-600">
              Ou{" "}
              <Link
                to="/signup"
                className="font-medium text-orange-500 hover:text-orange-400 text-decoration: underline"
              >
                registre-se gratuitamente.
              </Link>
            </p>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Como me cadastro na plataforma? {" "}
              <a
                href="#"
                onClick={openModalRegister}
                rel="noopener noreferrer"
                className="font-medium text-orange-500 hover:text-orange-400 text-decoration: underline"
              >
                Clique aqui.
              </a>
            </p>

          </div>

          {emailVerified && (
            <div className="bg-green-500 rounded py-2 px-3 text-white">
              Email verificado com sucesso! Por favor, faça o login para acessar a plataforma.
            </div>
          )}

          {error.__html && (
            <div
              className="bg-red-500 rounded py-2 px-3 text-white"
              dangerouslySetInnerHTML={error}
            ></div>
          )}

          {reset && (
            <div className="bg-green-500 rounded py-2 px-3 text-white">
              Senha redefinida com sucesso! Por favor, faça o login com sua nova senha para acessar a plataforma.
            </div>
          )}


          <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-4">
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
                    placeholder="Endereço de Email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
                    placeholder="Senha"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-orange-500 focus:ring-orange-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Lembre de mim.
                  </label>
                </div>



              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                  Entrar
                </button>
              </div>
            </div>
          </form>
          <div className="text-sm text-center">

            <p>Esqueceu sua senha?<span> </span>
              <Link
                to="/forgot-password"
                className="font-medium text-black-400 hover:text-black-300"
              >
                Clique aqui para recuperar.
              </Link>
            </p>
          </div>
          <hr />

          <p className="mt-2 text-center text-sm text-gray-600 ">
          Ainda não conhece o SISAC? {" "}
  <a
    href="#"
    onClick={openModal}
    rel="noopener noreferrer"
    className="font-medium text-orange-500 hover:text-orange-400 text-decoration: underline"
  >
    Saiba mais.
  </a>
</p>          
          {/* Modal para exibir o vídeo */}
          <TutorialVideo
                    event={closeModalRegister} 
                    isModalOpen={isModalOpenRegister} 
                    textDescription="Registro - SISAC"
                    videoLink="/videos/tutorials/registroSISAC.mp4"/>

          <TutorialVideo
                    event={closeModal} 
                    isModalOpen={isModalOpen} 
                    textDescription="Apresentação - SISAC"
                    videoLink="/videos/tutorials/apresentacaoSISAC.mp4"/>
        </div >
      </div >
    </>
  );
}
