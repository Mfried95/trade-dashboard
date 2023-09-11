import React from 'react'


const balanceItem = ({symbol, currency, amount, balance}) => {
  return (
        <div className="balance-item">
          <div className="balance-header">
          <span className='symbol'>{symbol}</span>
          <span className='symbol-name'>{currency}</span>
          </div>

          <div className="balance-number">
            <span>{amount} | {balance}</span>
          </div>
          
        </div>
  )
}

export default balanceItem