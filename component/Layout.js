import React from 'react'
import NavComp from './NavComp'
function Layout({ children }) {
    return (
        <>
            <NavComp />
            {children}
        </>
    )
}

export default Layout