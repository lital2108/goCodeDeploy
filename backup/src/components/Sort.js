import './Sort.css'
import { useContext, useEffect, useState } from "react";
import MyContext from "../MyContext";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Sort=()=>{
  const { allProducts, setProductsData, categories} = useContext(MyContext);
  const [sliderVal,setSliderVal]=useState([0,1000])
  const [selectVal,setSelectVal]=useState('/')

 const filterChange = ({event,data}) => {
  if (event) {
    setSelectVal(event)
  } else if (data){
    setSliderVal(data)
  } else{
    alert('no filter options provided')
  }
};

useEffect(()=>{
  if(selectVal === '/'){
    setProductsData(allProducts.filter(p=> p.price > sliderVal[0] && p.price < sliderVal[1]))
  }else{
    setProductsData(allProducts.filter(p => p.category === selectVal && (p.price > sliderVal[0] && p.price < sliderVal[1])))
  }
},[selectVal, sliderVal])


    return(
      <div className="sort">
      <div className="collection-sort">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="filterBy">Products</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value=''
              label="Products"
              onChange={(event) => filterChange({event: event.target.value})}
            >
              <MenuItem value="/">All Products</MenuItem>
              {categories.map((c, index)=>(<MenuItem key={index} value={c}>{c} </MenuItem>))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="collection-sort">
        <label>Filter by Price:</label>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={sliderVal}
            max={1000}
            onChange={(e) => filterChange({data: e.target.value})}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
    );
  }

  export default Sort;