// import React, { useState, useEffect, Fragment } from 'react'
// import './Admin.css'
// import ReadOnlyRow from './ReadOnlyRow' 
// import EditableRow from './EditableRow' 

// const Admin = () => {
//     const[products,setProducts]=useState([])

//     const [addFormData,setAddFormData]=useState({
//         title:'',
//         category:'',
//         price:''
//     })

//     const [editFormData,setEditFormData]=useState({
//         title:'',
//         category:'',
//         price:''
//     })

//     const [editProductId,setEditProductId]=useState(null);

//     const handleAddFormChange=(event)=>{
//         event.preventDefault();

//         const fieldName=event.target.getAttribute("name");
//         const fieldValue=event.target.value;

//         const newFormData={...addFormData};
//         newFormData[fieldName]=fieldValue;

//         setAddFormData(newFormData);
//     }
//     const handleEditFormChange =(event)=>
//     {
//         event.preventDefault();

//         const fieldName=event.target.getAttribute("name");
//         const fieldValue=event.target.value;

//         const newFormData={...addFormData};
//         newFormData[fieldName]=fieldValue;

//         setAddFormData(newFormData);
//     }

//     const handleAddFormSubmit=async (event) => {
//                 try {
//                     event.preventDefault();
//                     const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/addProduct`, {
//                     method: "POST",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       title: addFormData.title,
//                       category: addFormData.category,
//                       price: addFormData.price,
//                     }),
//                   });
              
//                   if (!response.ok) {
//                     throw new Error("Failed to update product");
//                   }}
//                   catch (error) {
//                     console.error(error);
//                 }
//         // const newProduct= {
//         //     id: nanoid(),
//         //     title: addFormData.title,
//         //     category: addFormData.category,
//         //     price: addFormData.price
//         // }
//         // const newProducts=[...products,newProduct];
//         // setProducts(newProducts);
//     }

//     const handleEditFormSubmit = async (event) => {
//         try {
//             event.preventDefault();
//             const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/updateAProduct/${editProductId}`, {
//             method: "Put",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               title: editFormData.title,
//               category: editFormData.category,
//               price: editFormData.price,
//             }),
//           });
      
//           if (!response.ok) {
//             throw new Error("Failed to update product");
//           }}
//           catch (error) {
//             console.error(error);
//         }
//     }
//     const handleEditClick = (event, product)=>{
//         event.preventDefault();
//         setEditProductId(product.id)
//         const formValues={
//             title:product.title,
//             category:product.category,
//             price:product.price
//         }
//         setEditFormData(formValues);
//     }

//     const handleCancleClick =()=>{
//         setEditProductId(null);
//     }
//     const fetchData = async () => {
//     // const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     setProducts(data)
//     }

//     useEffect(() => {
//     fetchData();
//     },[])

//   return (
//     <div>
//         <div onClick={handleEditFormSubmit}>
//         <table>
//             <thead>
//                 <tr className='header'>
//                     <td>Title</td>
//                     <td>Category</td>
//                     <td>Price</td>
//                     <td>Actions</td>    
//                 </tr>
//             </thead>
//             <tbody>
//                 {products.map((product)=>
//                 <Fragment>
//                     { editProductId === product.id ? (
//                         <EditableRow 
//                         editProductId={editProductId} 
//                         handleEditFormChange={handleEditFormChange}
//                         handleCancleClick={handleCancleClick} />
//                     ) : ( 
//                         <ReadOnlyRow product={product} handleEditClick={handleEditClick} /> 
//                     )}
//                 </Fragment>
//                 )}
//             </tbody>
//         </table>
//         </div>
//         <h2>add a product</h2>
//         <div onClick={handleAddFormSubmit}>
//             <input
//                     type="text"
//                     name="title"
//                     required="required"
//                     placeholder="Enter product title"
//                     onChange={handleAddFormChange}
//             />
//             <input
//                     type="text"
//                     name="category"
//                     required="required"
//                     placeholder="Enter product category"
//                     onChange={handleAddFormChange}
//             />
//             <input
//                     type="text"
//                     name="price"
//                     required="required"
//                     placeholder="Enter product price"
//                     onChange={handleAddFormChange}
//             />
//             <button >Add</button>
//         </div>
//         </div>
//     )
// }

// export default Admin




// import React, { useState, useEffect } from 'react';

// const ReadOnlyRow = ({ rowData }) => (
//   <tr>
//     <td>{rowData.title}</td>
//     <td>{rowData.category}</td>
//     <td>{rowData.price}</td>
//     <td>
//       <button>Edit</button>
//       <button>Delete</button>
//     </td>
//   </tr>
// );

// const EditableRow = ({ rowData, index, onInputChange, onSave, onCancel }) => (
//   <tr>
//     <td>
//       <input
//         type="text"
//         name="title"
//         value={rowData.title}
//         onChange={onInputChange}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         name="category"
//         value={rowData.category}
//         onChange={onInputChange}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         name="price"
//         value={rowData.price}
//         onChange={onInputChange}
//       />
//     </td>
//     <td>
//       <button onClick={() => onSave(index)}>Save</button>
//       <button onClick={onCancel}>Cancel</button>
//     </td>
//   </tr>
// );

// const Admin = () => {
//   const [tableData, setTableData] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [updatedValue, setUpdatedValue] = useState({ title: '', category: '', price: '' });

//   useEffect(() => {
//     const fetchData = async () => {
//     //   const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
//     const response = await fetch('https://fakestoreapi.com/products');

//     const data = await response.json();
//       setTableData(data);
//     };
//     fetchData();
//   }, []);

//   const handleUpdate = async index => {
//     const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/updateAProduct/${index}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedValue)
//     });
//     const updatedData = await response.json();
//     setTableData(updatedData);
//     setEditingIndex(null);
//   };

//   const handleAdd = async newValue => {
//     const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/addProduct`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newValue)
//     });
//     const updatedData = await response.json();
//     setTableData([...tableData, updatedData]);
//   };

//   const handleDelete = async index => {
//     const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/deleteAProduct/${index}`, {
//       method: 'DELETE'
//     });
//     const updatedData = await response.json();
//     setTableData(updatedData);
//   };

//   const handleEdit = index => {
//     setEditingIndex(index);
//     setUpdatedValue(tableData[index]);
//   };

//   const handleCancel = () => {
//     setEditingIndex(null);
//   };

//   const handleInputChange = event => {
//     setUpdatedValue({ ...updatedValue, [event.target.name]: event.target.value });
// };

//         return (
//         <div>
//         <table>
//         <thead>
//         <tr>
//         <th>Title</th>
//         <th>Category</th>
//         <th>Price</th>
//         <th>Actions</th>
//         </tr>
//         </thead>
//         <tbody>
//         {tableData.map((rowData, index) => {
//         if (index === editingIndex) {
//         return (
//         <EditableRow
//         key={index}
//         rowData={updatedValue}
//         index={index}
//         onInputChange={handleInputChange}
//         onSave={() => handleUpdate(index)}
//         onCancel={handleCancel}
//         />
//         );
//         }
//         return (
//         <ReadOnlyRow
//         key={index}
//         rowData={rowData}
//         onEdit={() => handleEdit(index)}
//         onDelete={() => handleDelete(index)}
//         />
//         );
//         })}
//         </tbody>
//         </table>
//         <button onClick={() => handleAdd(updatedValue)}>Add</button>
//         </div>
//         );
//         };

// export default Admin;

import React, { useState, useEffect, Fragment } from 'react'
import { CiTrash } from "react-icons/ci";
import { useParams } from 'react-router-dom';

const Admin = () => {
    const [productsData, setProductsData] = useState([])
    const { userName } = useParams();
    const [newTitle,setNewTitle]=useState('')
    const [newCategory,setNewCategory]=useState('')
    const [newPrice,setNewPrice]=useState('')
    const fetchData = async () => {
            // const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
            // const response = await fetch('https://fakestoreapi.com/products');
            const response = await fetch('http://localhost:8000/api/products');

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
          // const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/updateAProduct/${id}`, {
            const response = await fetch(`http://localhost:8000/api/products/updateAProduct/${id}`, {
  
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
          // const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/deleteAProduct/${id}`, {
            const response = await fetch(`http://localhost:8000/api/products/deleteAProduct/${id}`, {
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
          const response = await fetch('http://localhost:8000/api/products/addProduct', {
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
