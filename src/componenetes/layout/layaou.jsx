import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
const LayoutPublic = () => { 
    
    return(
        <div className="containerLayout">
            <NavBar />
            <Outlet />
        </div>
    )
 }

 export default LayoutPublic