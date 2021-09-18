import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const { user: {logged} } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticated={ logged }
                        component={ LoginScreen } 
                        exact 
                        path="/login" 
                    />
                    <PrivateRoute 
                        isAuthenticated={ logged }
                        component={ DashboardRoutes }
                        path="/"
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;