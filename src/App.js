import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import error404 from './Components/images/error.png'
import Main from './Layouts/Main';
import Category from './Components/Category/Category';
import Statistic from './Components/Statistic/Statistic';
import Blogs from './Components/Blogs/Blogs';
import BoostQuestions from './Components/BoostQuestions/BoostQuestions';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Category></Category>
        },
        {
          path: '/statistic',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/category/:categoryId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.categoryId}`),
          element: <BoostQuestions></BoostQuestions>
        }
      ]

    },
    {
      path: '*',
      element: <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        <div className="App">
          <header className="App-header">
            <h1 className='error-text text-center text-success mb-5'>404 Error</h1>
            <img src={error404} className="App-logo" alt="" />
            <h2 className='text-secondary'>Please type a right address...</h2>
          </header>
        </div>
      </div>,
    }
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
