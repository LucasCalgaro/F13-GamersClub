import { useState } from "react";
import Modal from "react-modal";
import React from "react";
                
                
                
export default function TutorialVideo(props){

    const ReactPlayer = React.lazy(() => import('react-player'));
    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={props.event}
            className="border-0 bg-white rounded-md shadow-lg w-full mx-auto mt-10 sm:w-1/2 p-5">
                <button onClick={props.event} className="float-right hover:text-red-500">&times;</button>
                <h2 className="text-lg font-bold mb-4 border-b border-gray-200">{props.textDescription}</h2>
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <div className="w-full h-auto">
                        <ReactPlayer url={`${import.meta.env.VITE_API_BASE_URL}${props.videoLink}`} playing controls width='100%' height='100%' />
                    </div>
                </React.Suspense>
        </Modal>);
}