import React from 'react'
import Nav from '../components/Nav'
import Contact from './Contact'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div>
               <Nav/>
               {children}
        <Contact/>
        <Footer/>
        </div>
    )
}

export default Layout
