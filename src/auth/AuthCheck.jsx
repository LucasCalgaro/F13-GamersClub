/*
import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios';

function AuthCheck({ children }) {
  const { currentUser, setCurrentUser } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient.get('/me')
      .then(({ data }) => {
        setCurrentUser(data);
        setLoading(false);
      })
      .catch(error => {
        // Lidar com o erro
        setLoading(false);
      });
  }, [setCurrentUser]);

  if (loading) {
    return null;  // Pode colocar um ícone de 'carregando'
  }

  return children;
}

export default AuthCheck;
*/