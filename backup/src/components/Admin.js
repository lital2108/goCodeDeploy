import React, { useState, useEffect, Fragment } from 'react'
import './Admin.css'
import ReadOnlyRow from './ReadOnlyRow' 
import EditableRow from './EditableRow' 

const Admin = () => {
    const[products,setProducts]=useState([])

    const [addFormData,setAddFormData]=useState({
        title:'',
        category:'',
        price:''
    })

    const [editFormData,setEditFormData]=useState({
        title:'',
        category:'',
        price:''
    })

    const [editProductId,setEditProductId]=useState(null);

    const handleAddFormChange=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute("name");
        const fieldValue=event.target.value;

        const newFormData={...addFormData};
        newFormData[fieldName]=fieldValue;

        setAddFormData(newFormData);
    }
    const handleEditFormChange =(event)=>
    {
        event.preventDefault();

        const fieldName=event.target.getAttribute("name");
        const fieldValue=event.target.value;

        const newFormData={...addFormData};
        newFormData[fieldName]=fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit=async (event) => {
                try {
                    event.preventDefault();
                    const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/addProduct`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      title: addFormData.title,
                      category: addFormData.category,
                      price: addFormData.price,
                    }),
                  });
              
                  if (!response.ok) {
                    throw new Error("Failed to update product");
                  }}
                  catch (error) {
                    console.error(error);
                }
        // const newProduct= {
        //     id: nanoid(),
        //     title: addFormData.title,
        //     category: addFormData.category,
        //     price: addFormData.price
        // }
        // const newProducts=[...products,newProduct];
        // setProducts(newProducts);
    }

    const handleEditFormSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/updateAProduct/${editProductId}`, {
            method: "Put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: editFormData.title,
              category: editFormData.category,
              price: editFormData.price,
            }),
          });
      
          if (!response.ok) {
            throw new Error("Failed to update product");
          }}
          catch (error) {
            console.error(error);
        }
    }
    const handleEditClick = (event, product)=>{
        event.preventDefault();
        setEditProductId(product.id)
        const formValues={
            title:product.title,
            category:product.category,
            price:product.price
        }
        setEditFormData(formValues);
    }

    const handleCancleClick =()=>{
        setEditProductId(null);
    }
    const fetchData = async () => {
    // const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data)
    }

    useEffect(() => {
    fetchData();
    },[])

  return (
    <div>
        <div onClick={handleEditFormSubmit}>
        <table>
            <thead>
                <tr className='header'>
                    <td>Title</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td>Actions</td>    
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>
                <Fragment>
                    { editProductId === product.id ? (
                        <EditableRow 
                        editProductId={editProductId} 
                        handleEditFormChange={handleEditFormChange}
                        handleCancleClick={handleCancleClick} />
                    ) : ( 
                        <ReadOnlyRow product={product} handleEditClick={handleEditClick} /> 
                    )}
                </Fragment>
                )}
            </tbody>
        </table>
        </div>
        <h2>add a product</h2>
        <div onClick={handleAddFormSubmit}>
            <input
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter product title"
                    onChange={handleAddFormChange}
            />
            <input
                    type="text"
                    name="category"
                    required="required"
                    placeholder="Enter product category"
                    onChange={handleAddFormChange}
            />
            <input
                    type="text"
                    name="price"
                    required="required"
                    placeholder="Enter product price"
                    onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
        </div>
        </div>
    )
}

export default Admin