import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout({children, cartNo}) {

    return (
        <>
        <Navbar cartNo={cartNo} />
        <main>
            {children}
        </main>
        <Footer/>

        </>
    )
} export default MainLayout