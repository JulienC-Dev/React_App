import Account from '../Account/Account';
import '../../styles/App.css';


function Dashboard({tx}){
    return (
        <main className='app-main'>
            <Account tx = {tx} />
        </main>
        
 )
}

export default Dashboard;