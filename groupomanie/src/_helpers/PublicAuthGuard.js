import { Navigate } from "react-router-dom";
import { accountService } from '../_services/account.service';

const PublicAuthGuard = ({ children }) => {

    if (!accountService.isLogged()) {
        return <Navigate to='/login' />
    }

    return children
};

export default PublicAuthGuard;