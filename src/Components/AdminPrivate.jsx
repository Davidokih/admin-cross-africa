import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    return user?.isAdmin === true ? children : <Navigate to="/login-admin" />;
};

export default Private;