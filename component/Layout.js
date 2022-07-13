import React from 'react'
import NavComp from './NavComp'
import FooterComp from './footercomp';
function Layout({ children }) {
    return (
        <>
            <NavComp />
            {children}
            <FooterComp />

        </>
    )
}

export default Layout