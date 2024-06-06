import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error} from "./pages/Error.jsx";
import {RootLayout} from "./components/RootLayout.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Szafa} from "./pages/Szafa.jsx"
import {LoginPage} from "./pages/LoginPage.jsx";

let router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <App/>,
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path: "/szafa",
                element: <Szafa/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },


        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
