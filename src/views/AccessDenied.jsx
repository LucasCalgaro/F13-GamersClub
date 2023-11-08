
import React from "react";
import { Link } from "react-router-dom";


export default function AccessDenied() {
    return (
        <>
          <div className="flex items-center justify-center w-screen h-screen">
            <div className="px-4 lg:py-12">
              <div className="lg:gap-4 lg:flex">
                <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                  <h1 className="mb-6 font-bold text-red-500 text-9xl">403</h1>
                  <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    <span className="text-red-500">Oops!</span> Acesso não autorizado!.
                  </p>
                  <p className="mb-9 text-center text-gray-500 md:text-lg">
                    Você não tem permissão para acessar essa página!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};