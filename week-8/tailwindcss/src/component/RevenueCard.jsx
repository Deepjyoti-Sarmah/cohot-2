import React from 'react'

const RevenueCard = ({title, amount, orderCounts}) => {
  return (
    <div className='bg-blue-300 rounded shadow-sm p-4 m-2 hover:bg-blue-400'>
        <div className='text-gray-700'>
            {title}?
        </div>
        <div className='flex justify-between'>
            <div className='font-semibold text-2xl'>
                $ {amount}
            </div>
            {orderCounts? 
                <div className='flex cursor-pointer underline flex-col justify-center'>
                    {orderCounts} order(s)
                </div>: null}
        </div>
    </div>
  )
}

export default RevenueCard