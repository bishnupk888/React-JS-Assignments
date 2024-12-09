import React from 'react'

const DataComponent = ({data}) => {
  return (
    <div>
        {data?.length? <table style={{ width: 500, border:'1px solid black' }}>
                <thead>
                    <tr>
                        Name
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, idx) => (
                        <tr key={idx} style={{border:'2px solid black'}}>
                            <td >{el.name}</td>
                    </tr>
                    ))}
                </tbody>
            </table> : <><h3>try again</h3></>}
        
    </div>
  )
}

export default DataComponent