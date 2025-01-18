import React from 'react'
import { Button } from "@/components/ui/button"
import { BrowserRouter,Routes ,Route,Navigate} from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat/chat'
import Profile from './pages/profile/profile'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/auth" element={<Auth/>}/>  
           <Route path="/chat" element={<Chat/>}/> 
           <Route path="/profile" element={<Profile/>}/> 
           <Route path="*" element={<Navigate to="/auth"/>}/>  //this the navigate path if anyone types sonething else it will reuoute to auth
            
           
           
        </Routes>
      
      
      </BrowserRouter>
  )
}

export default App