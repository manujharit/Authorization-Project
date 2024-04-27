import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import createBrowserRouter, Outlet, and Route
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import { connect } from "react-redux";
import { setUser, setEmail } from "./redux/action";
import Body from "./components/Body";

const App = ({ email, setEmail }) => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Body />,
            children: [
                {
                    path: '/',
                    element: <LoginPage  email={email} />
                },
                {
                    path: '/signup',
                    element: <SignUp setEmail={setEmail} />
                }
            ]
        }
    ]);
    return <RouterProvider router={appRouter} />;
};

const mapStateToProps = (state) => ({
    email: state.email
});

const mapDispatchToProps = {
    setEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
