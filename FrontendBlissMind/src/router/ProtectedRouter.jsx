import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../services/AuthProvider';

function ProtectedRouter(){
    const { isLogged} = useAuth();

    return isLogged ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRouter;