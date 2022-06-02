import '../../styles/Sidebar.css';
import SidebarLogo from './SidebarLogo';
import SidebarFilter from './SidebarFilter';

function Sidebar(){
    return (<div className="sidebar-main">
        <SidebarLogo/>
        <SidebarFilter/>
    </div>)
}

export default Sidebar;