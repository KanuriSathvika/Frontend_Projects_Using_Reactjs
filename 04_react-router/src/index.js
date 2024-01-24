import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Github ,{githubInfoloader} from './components/Github/Github';
import User from './components/User/User';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about/" element={<About/>} />
      <Route
        loader={githubInfoloader}
         path="github/" element={<Github/>} />
      
      <Route path="user/" element={<User/>} >
        <Route path=":useid" element={<User/>} />
      </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

