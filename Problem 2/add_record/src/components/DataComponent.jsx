import React from 'react'

const DataComponent = ({data}) => {
  return (
    <div>
        <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        Name
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, idx) => (
                        <tr key={idx} style={{border:'black'}}>
                        
                            <td >{el.name}</td>
                       
                    </tr>
                    ))}
                </tbody>
            </table>
        
    </div>
  )
}

export default DataComponent