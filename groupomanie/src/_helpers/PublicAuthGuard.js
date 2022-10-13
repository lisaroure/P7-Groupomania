import { Navigate } from "react-router-dom";
import { accountService } from '../_services/account.service';

const PublicAuthGuard = ({ children }) => {

    if (!accountService.isLogged()) {
        return <Navigate to='/auth/login' />
    }

    return children
};

export default PublicAuthGuard;