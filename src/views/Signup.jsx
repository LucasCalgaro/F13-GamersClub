import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import axiosClient from '../axios.js'
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function Signup() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });
  const [success, setSuccess] = useState({ __html: "" });
  const [isVerified, setIsVerified] = useState(false); // novo estado
  const [isLoading, setIsLoading] = useState(false); // novo estado
  const [academicRecord, setAcademicRecord] = useState("");


  const onSubmit = (ev) => {
    ev.preventDefault();
    setIsLoading(true);  // Ativa o estado de loading antes de enviar a requisição

    setError({ __html: "" });


    axiosClient
      .post("/signup", {
        name: fullName,
        email,
        password,
        password_confirmation: passwordConfirmation,
        academic_record: academicRecord, // Adicione esta linha
      })
      .then(({ data }) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
        setSuccess({ __html: 'Para concluir o registro, por favor, verifique tanto a sua CAIXA DE ENTRADA quanto a pasta de SPAM do seu email. Lembre-se de conferir especialmente a pasta de SPAM para garantir que o email de confirmação não tenha sido direcionado erroneamente.' });
        setIsVerified(true); // atualiza o estado após a chamada bem-sucedida
        setIsLoading(false); // Desativa o estado de loading após a chamada bem-sucedida
      })
      .catch((error) => {
        setIsLoading(false); // Desativa o estado de loading se a chamada falhar
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
          console.log(finalErrors)
          setError({ __html: finalErrors.join('<br>') })
        }
        console.error(error)
      });
  };

  const verifiedIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-6 h-6 absolute right-2 top-2 pointer-events-none">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );



  const [showAcademicInfo, setShowAcademicInfo] = useState(false);
  const handleAcademicInfoClick = () => {
    setShowAcademicInfo(!showAcademicInfo);
  };




  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Registre-se para acessar a plataforma.
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Ou{" "}
        <Link
          to="/login"
          className="font-medium text-orange-400 hover:text-orange-300"
        >
          se já possui uma conta, efetue o login.
        </Link>
      </p>

      {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>
      </div>)}
      {success.__html && (<div className="bg-green-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={success}>
      </div>)}

      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="relative">
            <label htmlFor="full-name" className="sr-only">
              Full Name
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              required
              value={fullName}
              onChange={ev => setFullName(ev.target.value)}
              disabled={isVerified}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
              placeholder="Nome Completo"
            />
            {isVerified && verifiedIcon}
          </div>
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
              onChange={ev => setEmail(ev.target.value)}
              disabled={isVerified}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
              placeholder="Endereço de E-mail"
            />
            {isVerified && verifiedIcon}
          </div>
          <div className="relative">
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
              onChange={ev => setPassword(ev.target.value)}
              disabled={isVerified}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
              placeholder="Senha"
            />
            {isVerified && verifiedIcon}
          </div>

          <div className="relative">
            <label htmlFor="password-confirmation" className="sr-only">
              Password Confirmation
            </label>
            <input
              id="password-confirmation"
              name="password_confirmation"
              type="password"
              required
              value={passwordConfirmation}
              onChange={ev => setPasswordConfirmation(ev.target.value)}
              disabled={isVerified}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
              placeholder="Confirmar Senha"
            />
            {isVerified && verifiedIcon}
          </div>
        </div>

        {showAcademicInfo && (
          <div className="bg-orange-300 rounded py-2 px-3 text-black mt-4 mb-2 text-justify">
            <strong>Registro Acadêmico:</strong> todo aluno da UniFatecie, após a matrícula, recebe um número de registro por e-mail, sendo também, o mesmo utilizado para acessar as demais plataformas (Moodle e AlunoNet) da instituição.
            <br /><br />
            Se desconhece o seu Registro Acadêmico, por favor, contate a instituição através do número: <strong>(44) 99153-3415</strong>.
          </div>
        )}

        <div className="relative">
          <div className="flex justify-between items-center mb-1 px-3">
            <label htmlFor="academic-record" className="text-sm text-gray-600">
              RA
            </label>
            <button onClick={handleAcademicInfoClick} className="text-sm text-orange-400 hover:text-orange-300">
              O que é Registro Acadêmico?
            </button>
          </div>
          <input
            id="academic-record"
            name="academic_record"
            type="number"
            required
            value={academicRecord}
            onChange={ev => setAcademicRecord(ev.target.value)}
            disabled={isVerified}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
            placeholder="Registro Acadêmico"
          />
          {isVerified && verifiedIcon}
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
            {isLoading ? 'Carregando...' : 'Registrar'}
          </button>
        </div>




      </form>
    </>
  );
}

