import { useStateContext } from '../contexts/ContextProvider' // Importar ContextProvider

export const useAuth = () => {
    return useStateContext();
};