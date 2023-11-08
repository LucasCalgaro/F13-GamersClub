import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axiosClient from '../axios.js'
import queryString from 'query-string';

function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate(); // Adicionado
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState({ __html: "" });

    const verifiedIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-6 h-6 absolute right-2 top-2 pointer-events-none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError({ __html: "" });

        axiosClient
            .post("/reset-password", {
                token: token,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
            })
            .then(({ data }) => {
                navigate("/login?reset=true"); // Atualizado para usar useNavigate
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
                    console.log(finalErrors)
                    setError({ __html: finalErrors.join('<br>') })
                }
            });
    };

    useEffect(() => {
        const queryValues = queryString.parse(location.search);
        if (queryValues.email) {
            setEmail(decodeURIComponent(queryValues.email));
        }
    }, [location]);

    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Redefina sua senha
            </h2>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
            >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            readOnly
                            className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm ${email ? 'pr-10' : ''}`}
                            placeholder="Email"
                        />
                        {email && verifiedIcon}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Nova Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
                            placeholder="Nova Senha"
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirmation" className="sr-only">
                            Confirmar Nova Senha
                        </label>
                        <input
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            required
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-200 focus:outline-none focus:ring-orange-200 sm:text-sm"
                            placeholder="Confirmar Nova Senha"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                        </span>
                        Redefinir
                    </button>
                </div>
            </form>
        </>
    );
}

export default ResetPassword;
