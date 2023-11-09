import React from "react";

export default function PageComponent({ title, buttons = "", children }) {
  return (
      <div className="relative">
        <header className="bg-zinc-900 shadow">
          <div className="flex justify-between items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
            {buttons}
          </div>
          
        </header>
        <main className="bg-zinc-900">
          <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
    </div>
  );
}
