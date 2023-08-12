
function Table({list,deleteItem}){
  

  const itemComponent = list.map((l)=>{
    return (
      <tr key={l.id}>
        <td>{l.name}</td>
        <td>{l.quantity}</td>
        <td><button onClick={()=>deleteItem(l.id)} className="xbtn">X</button></td>
      </tr>
    )
  })
    return(
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itemComponent}
          </tbody>
        </table>
    )
}

export default Table;