import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';
import Sidebar from './Sidebar';


function Home(){
    return (<div>
        <Header/>
        <Sidebar />
        <Outlet/>
        <Footer/>
    </div>
    
    )
}

export default Home;