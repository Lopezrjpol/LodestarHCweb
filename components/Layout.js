import Footer from './Footer'
import Navigate from './Navigate'

const Layout = ({children}) => {
    return ( 
        <div >
            <Navigate/>
            <div>
                <br/>
                <br/>
            {children}
            </div>
            <Footer/>
        </div>
     );
}
 
export default Layout;