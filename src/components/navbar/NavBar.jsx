import './NavBar.scss'
import React from 'react'
import {motion} from 'framer-motion'
import SideBar from '../sidebar/SideBar'

const NavBar = ()=> {
  return (
  <div className='navbar'>
        <SideBar/>
    <div className='wrapper'>
        <motion.span 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        >
            Manikandan R
        </motion.span>
        <motion.div className='social'
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}>
            <a href='https://github.com/Manikandan2005' target='_blank'><img src='/github.png'/></a>
            <a href='https://www.linkedin.com/in/manikandan0701' target='_blank'><img src='/linkedin.png'/></a>
        </motion.div>
    </div>
  </div>
  )
}

export default NavBar