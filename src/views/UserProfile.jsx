import { useEffect, useState } from "react";

//import axiosClient from "../axios.js";

import PageComponent from "../components/PageComponent";
import { PencilIcon, CameraIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function UserProfile() {

  const [newName, setNewName] = useState("");
  const [editMode, setEditMode] = useState(false);
  /*
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  
  

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/user`)
      .then((res) => {
        setLoading(false);
        setUser(res.data);
        setNewName(res.data.name);
        return res;
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });
  }, []);

  const handleSave = () => {
    axiosClient.put('/user', { name: newName })
      .then((res) => {
        setUser(res.data);
        setEditMode(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageUpload = event => {
    const formData = new FormData();
    formData.append('img_file', event.target.files[0]);

    axiosClient.post('/user/upload-image', formData)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  */
  return (
    <PageComponent title="Perfil do Usuário">
      {/*
      loading && <div className="flex justify-center text-lg">Carregando...</div>}
      {!loading && ( */
        <div className="grid md:grid-cols-1 grid-cols-1 gap-4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-700">
            <div className="text-center mb-10">
              <div className="relative">
                {/*user && user.img_file && (*/
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL}${user.img_file ? user.img_file : "profile-img.png" }`}
                    alt="user profile"
                    className="h-36 w-36 object-cover mx-auto rounded-full shadow-xl"
                  />
                /*)*/}
                <label
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline cursor-pointer absolute top-0 left-0 -mt-6 -mr-6"
                  htmlFor="file-upload"
                >
                  Alterar Foto
                </label>
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="font-bold text-lg">Nome:</div>
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                  />
                  <button onClick={ handleSave ? handleSave : null } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 mr-2" />
                    Salvar
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center mt-2">
                  <div className="text-lg">{user.name ? user.name : "Nome do Usuário"}</div>
                  <PencilIcon className="w-5 h-5 cursor-pointer ml-2" onClick={() => setEditMode(true)} />
                </div>
              )}
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">Email:</div>
              <div className="text-lg">{user.email ?  user.email : "exemplo@email.com" }</div>
            </div>
          </div>
          <input id="file-upload" type="file" onChange={handleImageUpload ? handleImageUpload : null} className="hidden" />
        </div>
      /* ) */}
    </PageComponent>
  );
}
