import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setLocalError] = useState({ __html: "" });
  const [success, setLocalSuccess] = useState({ __html: "" });

  const verifiedIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-6 h-6 absolute right-2 top-2 pointer-events-none">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );

  const onSubmit = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    setLocalError({ __html: "" });
    setLocalSuccess({ __html: "" });

    axiosClient
      .post("/password/email", { email })
      .then(() => {
        setIsLoading(false);
        setIsVerified(true);
        setLocalSuccess({ __html: "Se o email fornecido estiver associado a uma conta, um link de redefinição de senha foi enviado." });
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response && error.response.data && error.response.data.errors) {
          const errorData = error.response.data.errors;
          const finalErrors = Object.values(errorData).reduce(
            (accum, next) => [...accum, ...next],
            []
          );

          setLocalError({ __html: finalErrors.join("<br>") });
        } else {
          console.error(error);
        }
      });
  };

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Redefinir Senha
      </h2>

      {error.__html && (
        <div className="bg-red-500 rounded py-2 px-3 text-white mt-4" dangerouslySetInnerHTML={error}>
        </div>
      )}
      {success.__html && (
        <div className="bg-green-500 rounded py-2 px-3 text-white mt-4" dangerouslySetInnerHTML={success}>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="relative">
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
              disabled={isVerified || isLoading}  // Desativar o campo quando isVerified for true ou isLoading for true
            />
            {isVerified && verifiedIcon}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isVerified || isLoading} // Desativar o botão quando isVerified for true ou isLoading for true
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-white group-hover:text-white"
                aria-hidden="true"
              />
            </span>
            {isLoading ? 'Enviando...' : 'Enviar Email de Redefinição'}
          </button>
        </div>
      </form>

      <p className="mt-2 text-center text-sm text-gray-600">
        Ou{" "}
        <Link
          to="/login"
          className="font-medium text-orange-400 hover:text-orange-300"
        >
          faça login se você já tem uma conta.
        </Link>
      </p>
    </>
  );
}
