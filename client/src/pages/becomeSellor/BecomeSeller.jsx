import React from 'react'

const BecomeSeller = () => {
  return (
    <div style={{height:"50vh",flex:1, display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        <h1>
            Start your business over here
        </h1>
        <h2>
            Connect with world and sell your services to them.
        </h2>
        <button style={{width:"50vw", padding: "16px 8px", border: "0", borderRadius: "4px", fontWeight: '600',}}><a href='/signup' target='_self' className='link'>Create your seller account</a></button>
    </div>
  )
}

export default BecomeSeller