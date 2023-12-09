import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OrderMenuPage from './Component/OrderMenuPage/OrderMenuPage';
import MixMenuPage from './Component/MixMenuPage/MixMenuPage';
import MixTeaPage from './Component/MixTeaPage/MixTeaPage';
import MixCoffeePage from './Component/MixCoffeePage/MixCoffeePage';
import DrinkRecommend from './Component/Home/LinkDrink/DrinkRecommend';
import ReviewPage from './Component/ReviewPage/ReviewPage';
import QRCodePage from './Component/QRCodePage/QRCodePage';
import StaffOrderMenuPage from './Staff/OrderMenuPage/StaffOrderMenuPage';
import StaffHome from './Staff/Home/StaffHome';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "ButtonOrder",
    element: <OrderMenuPage/>
  },
  {
    path: "logo",
    element: <App/>
  },
  {
    path: "ButtonMixOrder",
    element: <MixMenuPage/>
  },
  {
    path: "TextButtonTeaMixNow",
    element: <MixTeaPage/>
  },
  {
    path: "TextButtonCoffeeMixNow",
    element: <MixCoffeePage/>
  },
  {
    path: "MixMenuPage",
    element: <MixMenuPage/>
  },
  {
    path: "LinkOrderMenuPage",
    element: <OrderMenuPage/>
  },
  {
    path: "LinkMixMenuPage",
    element: <MixMenuPage/>
  },
  {
    path: "ReviewPage",
    element: <ReviewPage/>
  },
  {
    path: "QRCodePage",
    element: <QRCodePage/>
  },
  {
    path: "LinkStaffOrderMenuPage",
    element: <StaffOrderMenuPage/>
  },
  {
    path: "logostaffpage",
    element: <StaffHome/>
  },
 
  
 
  
  
  
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
