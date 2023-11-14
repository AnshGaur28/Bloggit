import Navbar from "./navbar"
import Footer from './footer'
function Layout({children}){
    return (
        <>
        <Navbar/>
            {children}
        <Footer/>
        </>
    )

}

export default Layout