import React from 'react'
import { CiEdit, CiTrash } from "react-icons/ci";

const ReadOnlyRow = ({product, handleEditClick}) => {
  return (
    <tr>
        <td>{product.title}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td> 
            <CiEdit cursor="pointer" style={{ height: "25px", width: "25px" }} onClick={(event)=>handleEditClick(event,product)} />
            <CiTrash cursor="pointer" style={{ height: "25px", width: "25px" }}  />
        </td>

    </tr>
  )
}

export default ReadOnlyRow