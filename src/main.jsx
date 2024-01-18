import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Home.jsx'
import Error from './component/Error.jsx'
import Contact from './component/Contact.jsx'
import Header from './component/Header.jsx'
import Resume from './component/Resume.jsx'
// import Footer from './component/footer.jsx'
import Services from './component/Services.jsx'
import Blog from './component/Blog.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([{
  path:'/',
  element:<Home/>,
  errorElement:<Error/>
},
{
  path:'/contact',
  element:<Contact/>,
  errorElement:<Error/>
},
// {
//   path:'/about',
//   // element:<Footer/>
// },
{
  path:'/resume',
  element:<Resume/>
},
{
  path:'/service',
  element:<Services/>
},
{
  path:'/blog',
  element:<Blog/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
