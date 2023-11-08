import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children, access, ...rest }) {
    let { currentUser } = useAuth()
    let location = useLocation()
    
    if (!currentUser) {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        return <Navigate to="/login" state={{ from: location }} />
    }

    if (access.includes(currentUser.user_type)) {
        // Se o tipo de usuário tem acesso, renderize o componente
        return children
    }

    // Se não, redirecione para uma página de erro ou página inicial
    else if(currentUser.user_type == "analyst"){
        return <Navigate to="/analyst/inProgress" />
    }
    
    else if (currentUser.user_type == "user"){
        return <Navigate to="/" />
    }
    else {
        return <Navigate to="/access-denied"/>
    }
}

export default ProtectedRoute;
