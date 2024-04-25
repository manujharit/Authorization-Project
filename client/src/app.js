import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import createBrowserRouter, Outlet, and Route
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import { connect } from "react-redux";
import { setUser, setEmail } from "./redux/action";
import Body from "./components/Body";

const App = ({ user, setUser, email, setEmail }) => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Body />,
            children: [
                {
                    path: '/',
                    element: <LoginPage user={user} setUser={setUser} email={email} />
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
    user: state.user,
    email: state.email
});

const mapDispatchToProps = {
    setUser,
    setEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
