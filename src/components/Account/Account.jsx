import PropTypes from 'prop-types'

function Account({tx}){
  return (
        <div>
            <div>
                {tx.map((item,i) => {
                    return (
                        <div key={i}>{item.blockNumber} - {item.blockHash}
                        {item.timeStamp} - {item.hash}
                        {item.nonce} - {item.transactionIndex}
                        {item.from} - {item.to}
                        {item.value} - {item.gas}
                        {item.gasPrice} - {item.input}
                        {item.contractAddress} - {item.cumulativeGasUsed}
                        {item.txreceipt_status} - {item.gasUsed}
                        {item.confirmations} - {item.isError}
                        </div>)
                })}
            </div>
        </div>
  )
}

Account.propTypes = {
    tx: PropTypes.array,
}


export default Account;