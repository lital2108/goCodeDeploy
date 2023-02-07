import React from 'react'

const EditableRow = (editFormData, handleEditFormChange) => {
  return (
    <tr>
         <td>
          <input 
            type="text"
            name="title"
            required="required"
            placeholder="Enter product title"
            value={editFormData.title}
            onChange={handleEditFormChange}
            >
          </input>
        </td>
        <td>
          <input
          type="text"
          name="category"
          required="required"
          placeholder="Enter product category"
          value={editFormData.category}
          onChange={handleEditFormChange}
          >
          </input>
        </td>
        <td>
          <input 
            type="text"
            name="price"
            required="required"
            placeholder="Enter product price"
            value={editFormData.price}
            onChange={handleEditFormChange}
            >
          </input>
        </td>
        <td>
        <button type='submit'>Save</button>
        <button type='submit'>Cancle</button>
      </td>
    </tr>
  )
}

export default EditableRow