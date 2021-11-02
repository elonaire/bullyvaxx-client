import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface ProtectedRouteProps {
    component: React.ComponentType<RouteProps>;
    exact: boolean;
    path: string;
}
 
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("user_id") === 'USER';
    return ( 
        <Route
      {...rest }
      render={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
     );
}
 
export default ProtectedRoute;