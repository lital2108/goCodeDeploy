import React from 'react'
import { useContext,useState, useEffect } from "react";
import MyContext from "../MyContext";
import { CiEdit, CiTrash } from "react-icons/ci";
import './Admin.css'



const edit= ()=>{

}
const Rows = (props) =>{
    const {title, price, category, description} = props
    return(
    <tr>
        <td>{title}</td>
        <td>{category}</td>
        <td>{price}</td>
        {/* <td>{description}</td> */}
        <td><CiEdit cursor='pointer' style={{height:'25px', width:'25px'}}/></td>
        <td><CiTrash onClick={()=>edit() }cursor='pointer' style={{height:'25px', width:'25px'}}/></td>
    </tr>)
}
const Table = (props) => {
    const {data} = props
    return (
    <table>
        {data.map(row => 
            <Rows title = {row.title}
                price = {row.price}
                category = {row.category}
            // description = {row.description} />
            />
        )}
    </table>)
}
const Admin = () => {
    const [rows, setRows] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
        ///api/products
        const products = await response.json();
        setRows(products)
      }
    
      useEffect(() => {
        fetchData();
        },[])

    // const { productsData } = useContext(MyContext);

  return (
    <div className='Admin'>
    <thead>
        <td>Title</td>
        <td>Category</td>
        <td>Price</td>
        <td>Edit</td>
        <td>Erase</td>
    </thead>
        <Table data = {rows} />
    </div>
  )
}

export default Admin