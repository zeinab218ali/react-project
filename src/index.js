import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './../src/Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Activities from './Components/Activities/Activities';
import Contact from './Components/Contact-us/Contact';
import AdminEmail from './Components/AdminEmail/AdminEmail';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RegisterRequest from './Components/RegisterRequest/RegisterRequest';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Dashboard from './Components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,

    children:[
      {
        index: true,
        path: "home",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "registerRequest",
        element: <RegisterRequest />
      },
      {
        path: "adminDashboard",
        element: <AdminDashboard />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: 'admin-email',
        element: <AdminEmail />
      }
    ]
  },
  // {
  //   path: "login",
  //   element: <Login/>
  // },
  // {
  //   path: "register",
  //   element: <Register/>
  // },
  {
    path:'activities',
    element: <Activities/>
  },
  {
    path:'contact-us',
    element: <Contact/>
  }
  
],);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
