
import React, { useState, useEffect, Fragment } from 'react'
import { CiTrash,CiImageOn } from "react-icons/ci";
import {useNavigate, useParams} from 'react-router-dom';

const Admin = () => {
    const [productsData, setProductsData] = useState([])
    const { userName } = useParams();
    const [newTitle,setNewTitle]=useState('')
    const [newCategory,setNewCategory]=useState('')
    const [newPrice,setNewPrice]=useState('')
    const navigate = useNavigate();

    const fetchData = async () => {
            const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
            // const response = await fetch('https://fakestoreapi.com/products');
            // const response = await fetch('http://localhost:8000/api/products');

            const data = await response.json();
            setProductsData(data);
        }
        
    useEffect(() => {
    fetchData();
    },[])


  
    const onChangeInput = async (e, id) => {
        const { name, value } = e.target
        const product = productsData.find((item) => item._id === id)
        product[name] = value
        console.log(name,value,product);
    
        try {
          const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/updateAProduct/${id}`, {
            // const response = await fetch(`http://localhost:8000/api/products/updateAProduct/${id}`, {
  
          method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          })
      
          const updatedProduct = await response.json()
          console.log(updatedProduct)
      
          const editData = productsData.map((item) =>
            item.id === id ? updatedProduct : item
          )
      
          setProductsData(editData)
        } catch (error) {
          console.error(error)
        }
      }
      
      const handleDeleteItem = async (id) => {
        try{
          const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/deleteAProduct/${id}`, {
            // const response = await fetch(`http://localhost:8000/api/products/deleteAProduct/${id}`, {
          method:'DELETE'
        })
        const deletedProduct = await response.json()
        setProductsData(productsData.filter(p => p._id !== deletedProduct._id))
      }

      catch(e){
        console.log(e)
      }
      } 

      const handleAddItem = async () => {
        try {
          // const response = await fetch('http://localhost:8000/api/products/addProduct', {
            const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/addProduct`, {

          method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: newTitle,
              category: newCategory,
              price: newPrice
            })
          })
          const addedProduct = await response.json()
          setProductsData([...productsData, addedProduct])
        } catch (error) {
          console.error(error)
        }
      }
      
    return (
      <div className="container">
        <h1>Hello {userName}</h1>
        <tr><td colSpan="2">&nbsp;</td></tr>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map(({ _id, title, category, price }) => (
             <Fragment>
             
             <tr key={_id}>
                <td>
                  <input
                    name="title"
                    defaultValue={title}
                    type="text"
                    onBlur={(e) => onChangeInput(e, _id)}
                    placeholder="Type Title"
                  />
                </td>
                <td>
                  <input
                    name="category"
                    defaultValue={category}
                    type="text"
                    onBlur={(e) => onChangeInput(e, _id)}
                    placeholder="Type Category"
                  />
                </td>
                <td>
                  <input
                    name="price"
                    type="text"
                    defaultValue={price}
                    onBlur={(e) => onChangeInput(e, _id)}
                    placeholder="Type Price"
                  />
                </td>
                <td> 
                    <CiTrash className='icon' cursor="pointer" style={{ height: "25px", width: "25px" }} onClick={() => handleDeleteItem(_id)}  />
                    <CiImageOn className='icon' cursor="pointer" style={{ height: "25px", width: "25px" }} onClick={()=> navigate(`/products/${_id}` , { replace: true })}/>                
                </td>
              </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
        <tr><td colSpan="2">&nbsp;</td></tr>

        <h1>Add an item</h1>
        
        <div>
          <tr>
            <td>
            <input
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter product title"
                    defaultValue={newTitle}
                    onBlur={(e) => setNewTitle(e.target.value)}            />
            </td>
            <td>
            <input
                    type="text"
                    name="category"
                    required="required"
                    placeholder="Enter product category"
                    defaultValue={newCategory}
                    onBlur={(e) => setNewCategory(e.target.value)}
            />
            </td>
            <td>
            <input
                    type="text"
                    name="price"
                    required="required"
                    placeholder="Enter product price"
                    defaultValue={newPrice}
                    onBlur={(e) => setNewPrice(e.target.value)}

            />
            </td>
            <button onClick={handleAddItem}> Add </button>
          </tr>
        </div>
      </div>
    )
  }
  
  export default Admin
