import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: Component,
    isAdmin,
    isVerifying,
    ...rest
    }) => (
    <Route
        {...rest}
        render={props =>
        isVerifying ? (
            <div />
        ) : isAdmin ? (
            <Component {...props} />
        ) : (
            <Redirect
            to={{
                pathname: "/",
                state: { from: props.location }
            }}
            />
        )
        }
    />
);
export default ProtectedRoute;