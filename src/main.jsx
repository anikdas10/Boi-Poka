import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root/Root.jsx';
import ErrorPage from './assets/components/ErrorPage/ErrorPage.jsx';
import Home from './assets/components/Home/Home.jsx';
import DashBoard from './assets/components/DashBoard/DashBoard.jsx';
import BookDetail from './assets/components/BookDetail/BookDetail.jsx';
import LIstedBOOk from './assets/components/ListedBooks/LIstedBOOk.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('../public/data/booksData.json')
      },
      {
        path:'/listedbooks',
        element:<LIstedBOOk></LIstedBOOk>,
        loader:()=>fetch('../public/data/booksData.json')
      }
      ,
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
