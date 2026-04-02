import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import ProtectedWrapper from './pages/ProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={ <Start/>} />
        <Route path='/userLogin' element ={ <UserLogin/>} />
        <Route path='/userSignup' element ={ <UserSignup/>} />
        <Route path='/captainLogin' element ={ <CaptainLogin/>} />
        <Route path='/captainSignup' element ={ <CaptainSignup/>} />
        <Route path='/home' element ={ 
          <ProtectedWrapper>
            <Home/>
          </ProtectedWrapper>
        } />
        <Route path='/logoutCaptain' element= {
          <ProtectedWrapper>
            <CaptainLogout/>
          </ProtectedWrapper>
        }/>
        <Route path='/captainHome' element ={ 
          <ProtectedWrapper>
            <CaptainHome/>
          </ProtectedWrapper>
        } />
        <Route path='/logout' element= {
          <ProtectedWrapper>
            <CaptainLogout/>
          </ProtectedWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App
