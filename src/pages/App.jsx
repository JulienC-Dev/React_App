import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Dashboard from '../components/Dashboard/Dashboard';
import CustomDashboard from '../components/CustomDashboard/CustomDashboard';



function App(){
  const txs = [{"blockNumber":"5018233","blockHash":"0x4b3c6be301455b8b2ccc63a6fbb87bf221002387110ffdc4e27a38e28b18aa46","timeStamp":"1624443218","hash":"0x54917a62b59f72c7c09c444f8b7b9f4c313255857cc07e2c68767fabf2ee3464","nonce":"345013","transactionIndex":"3","from":"0x8ced5ad0d8da4ec211c17355ed3dbfec4cf0e5b9","to":"0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae","value":"50000000000000000","gas":"30000","gasPrice":"6810910066","input":"0x00","contractAddress":"","cumulativeGasUsed":"235967","txreceipt_status":"1","gasUsed":"21004","confirmations":"1939968","isError":"0"},{"blockNumber":"6500731","blockHash":"0xe5412c116f8e63a7675c5d41cf8c71a9cc243a5a19cca7b246151a3ce2fb25b9","timeStamp":"1646738383","hash":"0xcf6b536a5eb4e0c3a833d86c333c2d14863d7c41497c9cc48a58aa580c64cfa0","nonce":"18","transactionIndex":"36","from":"0xc624b506fb47b6748000227a02701a20d8485591","to":"0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae","value":"100000000000000000","gas":"21000","gasPrice":"1940061260","input":"0x","contractAddress":"","cumulativeGasUsed":"29969219","txreceipt_status":"1","gasUsed":"21000","confirmations":"457470","isError":"0"}]
  // const [showResults, setShowResults] = useState(false);

  return (
    <div>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<Dashboard tx = {txs}/>} />
              <Route path="dashboard" element={<Dashboard tx = {txs}/>}>
                <Route path=":id_compte" element={<CustomDashboard/>} />
              </Route>
            </Route>   
          </Routes>
    </div>

  )
}
// '42 is the answer'

export default App;
