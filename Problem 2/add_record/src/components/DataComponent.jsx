import React from 'react'

const DataComponent = ({ data, setAllData }) => {
    const handleDelete = (idx) => {
        console.log("delete ", idx)
        const filteredData = data.filter((_, index) => index !== idx);
        setAllData(filteredData); 
    }

    return (
        <div>
            {data?.length ? (
                <table style={{ width: 500}}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el, idx) => (
                            <tr key={idx} style={{ border: '1px solid black' }}>
                                <td style={{ border: '1px solid black' }}>
                                    {el.name}
                                    <button onClick={() => handleDelete(idx)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3>try again</h3>
            )}
        </div>
    )
}

export default DataComponent
