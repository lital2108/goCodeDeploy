// import React, { Fragment } from 'react'
// import { useContext,useState, useEffect } from "react";
// import MyContext from "../MyContext";
// import { CiEdit, CiTrash } from "react-icons/ci";
// import './Admin.css'
// import EditableRaw from './EditableRaw';
// import ReadOnlyRaw from './ReadOnlyRaw';



// const edit= ()=>{

// }
// const Rows = (props) =>{
//   const {title, price, category} = props;
//   const [isEditing, setIsEditing] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [updatedTitle, setUpdatedTitle] = useState(props.title);
//   const [updatedPrice, setUpdatedPrice] = useState(props.price);
//   const [updatedCategory, setUpdatedCategory] = useState(props.category);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };
//   const handleDelete = () => {
//     setIsDeleting(true);
//     deleteProduct();
//   };

//   const deleteProduct = async () => {
//     try {
//       const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/deleteAProduct/${props.id}`, {
//         method: "DELETE",
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to delete product");
//       }
  
//       setIsDeleting(false);
//     } catch (error) {
//       console.error(error);
//     }
//     fetchData();
//   };
  
//   const handleSave = async () => {
//     try {
//         console.log(props.id);
//       const response = await fetch(`https://gocodeprojectdeploy.onrender.com/api/products/updateAProduct/${props.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: updatedTitle,
//           price: updatedPrice,
//           category: updatedCategory,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to update product");
//       }
  
//       setIsEditing(!isEditing);
//     } 
//     catch (error) {
//       console.error(error);
//     }
//   };
  
//     return(
       
//     // <tr>
//     //      <td>
//     //     {isEditing ? (
//     //       <input
//     //         value={updatedTitle}
//     //         onChange={(e) => setUpdatedTitle(e.target.value)}/>) : 
//     //       ( title
//     //     )}
//     //   </td>
//     //   <td>
//     //     {isEditing ? (
//     //       <input
//     //         value={updatedCategory}
//     //         onChange={(e) => setUpdatedCategory(e.target.value)}/>) : 
//     //       ( category
//     //     )}
//     //   </td>
//     //   <td>
//     //     {isEditing ? (
//     //       <input
//     //         value={updatedPrice}
//     //         onChange={(e) => setUpdatedPrice(e.target.value)}/>) : 
//     //       ( price
//     //     )}
//     //   </td>
//       {/* <td>
//         {isEditing ? (
//           <button onClick={handleSave}> Save </button>) : 
//           (
//             <CiEdit cursor="pointer" style={{ height: "25px", width: "25px" }} onClick={handleEdit} />
//         )}
//       </td>
//       <td>
//         <CiTrash
//           cursor="pointer" style={{ height: "25px", width: "25px" }} onClick={handleDelete} />
//       </td> */}
//     // </tr>
//     )
// }
// // const Table = (props) => {
// //     const {data} = props
// //     return (
// //     <table>
// //         {data.map(row => 
// //         <Fragment>
// //             { isEditing ? <EditableRaw handleSave={handleSave} updatedTitle={updatedTitle} setUpdatedTitle={setUpdatedTitle} updatedCategory={updatedCategory} setUpdatedCategory={setUpdatedCategory} updatedPrice={updatedPrice} setUpdatedPrice={setUpdatedPrice}/> : 
// //                 <ReadOnlyRaw row={row} handleDelete={handleDelete} handleEdit={handleEdit} /> }
// //         </Fragment>
// //             // <Rows title = {row.title}
// //             //     price = {row.price}
// //             //     category = {row.category}
// //             // />
// //         )}
// //     </table>)
// // }
// const Admin = () => {
//     const [rows, setRows] = useState([]);
//     const {data} = props

//     const fetchData = async () => {
//         // const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');
//         const response = await fetch('https://fakestoreapi.com/products');

//         ///api/products
//         const products = await response.json();
//         setRows(products)
//       }
    
//       useEffect(() => {
//         fetchData();
//         },[])


//   return (
//     <div className='Admin'>
//     <thead>
//         <td>Title</td>
//         <td>Category</td>
//         <td>Price</td>
//         <td>Edit</td>
//         <td>Erase</td>
//     </thead>
//         {data.map(row => 
//         <Fragment>
//             { isEditing ? <EditableRaw handleSave={handleSave} updatedTitle={updatedTitle} setUpdatedTitle={setUpdatedTitle} updatedCategory={updatedCategory} setUpdatedCategory={setUpdatedCategory} updatedPrice={updatedPrice} setUpdatedPrice={setUpdatedPrice}/> : 
//                 <ReadOnlyRaw row={row} handleDelete={handleDelete} handleEdit={handleEdit} /> }
//         </Fragment>
//             // <Rows title = {row.title}
//             //     price = {row.price}
//             //     category = {row.category}
//             // />
//         )}
//         {/* <Table data = {rows} /> */}
//     </div>
//   )
// }

// export default Admin