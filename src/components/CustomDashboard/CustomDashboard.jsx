import { useParams } from 'react'

function CustomDashboard(){
    let params = useParams();
    return <div>{params.id_compte}</div>;
}

export default CustomDashboard;