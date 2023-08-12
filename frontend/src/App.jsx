import { useEffect, useState } from "react"
import Table from "./components/table"

function App() {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [list,setList] = useState([])

  useEffect(()=>{
    getList()
  },[])

  const getList = async ()=>{
    fetch('http://127.0.0.1:8000/api/')
    .then(res=>res.json())
    .then(data=>setList(data))
  }

  const addItem = async ()=>{
    fetch('http://127.0.0.1:8000/api/',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({"name":name,"quantity":quantity})
    })
    .then(res=>res.json())
    .then(data=>{
      setList(prevList => [...prevList, data]);
    })
    setName("")
    setQuantity("")
  }
  let deleteItem = async(id)=>{
    fetch(`http://127.0.0.1:8000/api/${id}/delete`,{
      method:"DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setList(prevList => prevList.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <nav>
        <h1>Shopping List</h1>
      </nav>
      <div className="main">
        <div className="form">
          <input type="text" name="name" autocomplete="off" placeholder="Item Name..." onChange={(e) => setName(e.target.value)} value={name} />
          <input type="text" name="quantity" autocomplete="off" placeholder="Quantity..." onChange={(e) => setQuantity(e.target.value)} value={quantity} />
          <button onClick={addItem}>+</button>
        </div>

        <Table list={list} deleteItem={deleteItem} />

      </div>
    </div>
  )
}

export default App
