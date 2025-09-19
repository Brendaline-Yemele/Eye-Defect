
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './container/navigation'
// import About from './Pages/about'
import Contact from './Pages/contact'
import HomePage from './Pages/home'
import Products from './Pages/products'
import SignUpfrom from './Pages/SignUp/SignupForm.tsx'
import SigninFrom from './Pages/SignIn/SigninForm.tsx'
import Dashboard from "./Pages/Dashboard/Dashboard";
import { type JSX } from "react";
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/Login" />;
};

const Navitems=[
  {
    title:'Home',
    path:'/'
  },
  {
    title:'About',
    path:'/about'
  },
  {
    title:'Contact',
    path:'/contact'
  },
  {
    title:'Products',
    path:'/products'
  },
]



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar items={Navitems}/>
      <Routes>
        <Route path='/signup' element={<SignUpfrom/>}/>
        <Route path='/signin' element={<SigninFrom/>}/>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
         
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
     
      </BrowserRouter>
    </div>
  )
}

export default App