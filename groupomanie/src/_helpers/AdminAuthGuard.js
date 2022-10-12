import { Navigate } from "react-router-dom";
import { accountService } from '../_services/account.service';

const AdminAuthGuard = ({ children }) => {

    if (!accountService.isLogged()) {
        return <Navigate to='/auth/login' />
    }

    return children
};

export default AdminAuthGuard;