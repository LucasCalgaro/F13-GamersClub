import { useContext, useState, createContext, useEffect } from "react";
// Back-end Connection
//import axiosClient from "../axios";

const StateContext = createContext({
  toast: {
    title: null,
    message: null,
    show: false,
    type: null,
    size: "sm",
  },
  //currentUser: {},
  //userToken: null,
  //setCurrentUser: () => {},
  //setUserToken: () => {},
});


export const ContextProvider = ({ children }) => {

  /* Get User Login Token
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (userToken) {  // Adicione essa checagem
      setLoadingUser(true);
      axiosClient.get('/me')
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .finally(() => {
          // Defina o estado de carregamento como false quando a solicitação for concluída
          setLoadingUser(false);
        });
    } else {
      // Se não há token, não estamos carregando o usuário
      setLoadingUser(false);
    }
  }, [userToken]) // Adicione o token como dependência

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }
  */


  // Errors/Success Modal Trigger
  const [toast, setToast] = useState({title: '', message: '', show: false, type: null, size: null}) // Novo campo

  const showToast = (title, message, type = 'success') => { // Novo argumento
    setToast({title, message, show: true, type, size: "sm"})  // Novo campo
  }

  const hideToast = () => { 
    setToast({title: '', message: '', show: false, type: null})
  }

  return (
    <StateContext.Provider
      value={{
        //currentUser,
        //setCurrentUser,
        //userToken,
        //setUserToken,
        //loadingUser
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
