import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';


function Home({tx}){
    return (<div>
        <Header/>
        <Sidebar />
        <Outlet/>
        <Footer/>
    </div>
    
    )
}

export default Home;