import React, { useState } from 'react'
import axios from 'axios'

const ButtonComponent = ({getData}) => {
    const [data, setData] = useState([])

    const handleButtonClick =()=>{
            console.log('call to api')
            
            axios.get(`https://swapi.dev/api/people/${Math.floor(Math.random()*10)}`).then((response)=>{
                setData(response.data)
                console.log(response)
            }).then(()=>{
                console.log("data :",data)
                getData(data)
            })
            .catch((err)=>{
                console.error(err)
            })
         }
    
  return (
    <div>
        <button onClick={handleButtonClick}>
            Add Record
        </button>
    </div>
  )
}

export default ButtonComponent