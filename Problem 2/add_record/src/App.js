
import { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import DataComponent from './components/DataComponent';


function App() {
  const [allData, setAllData] = useState([])

  const getAllData =(data)=>{
      console.log("data in getData",data)
      setAllData([...allData,data])
  }
  return (
    <div className="App">
        <ButtonComponent getData={getAllData}/>
        <DataComponent data={allData}/>
    </div>
  );
}

export default App;
