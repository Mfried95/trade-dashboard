import React from 'react'


const balanceItem = ({symbol, currency, amount, balance}) => {
  return (
        <div className="balance-item">
          <div className="currency">
          <span>{symbol}</span>
          <span>{currency}</span>
          </div>

          <div className="balance-number">
            <span>{amount} | {balance}</span>
          </div>
          
        </div>
  )
}

export default balanceItem