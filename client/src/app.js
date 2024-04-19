import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // Import createBrowserRouter, Outlet, and Route
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import { connect } from "react-redux";
import { setUser } from "./redux/action";
import Body from "./components/Body";

const App = ({ user, setUser }) => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Body />,
            children: [
                {
                    path: '/',
                    element: <LoginPage user={user} setUser={setUser} />
                },
                {
                    path: '/signup',
                    element: <SignUp setUser={setUser} />
                }
            ]
        }
    ]);

    return <RouterProvider router={appRouter} />;
};

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = {
    setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
