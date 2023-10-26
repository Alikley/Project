import {useState} from 'react'
import {  Card,} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { CardItemType } from "./Products"
import { formatCurrency } from "../../../utilities/formatCurrency";
import FormControl from '@mui/material/FormControl';

import { Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
interface filterProps{
    filter:CardItemType[];
    data:CardItemType[];
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 260,
    },
  },
};

const ShowProducts = ({filter,data}:filterProps) => {

    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  


  return (
    <div>
              <div className='d-flex align-items-center justify-content-between product'>
                  <div className='total-products'>
                    <p>
                      <span>200 </span>  
                      products found
                    </p>
                  </div>
                  <div className='d-flex justify-content-center'>
                  <FormControl sx={{ m: 1, width: 300 }} className='me-2'>
                      <InputLabel id="demo-multiple-checkbox-label">Highest Rated</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Highest Rated" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                      >
                        {filter.map((name) => (
                          <MenuItem key={name.id} value={name.category}>
                            <Checkbox checked={personName.indexOf(name.category) > -1} />
                            <ListItemText primary={name.category} />
                          </MenuItem>
                        ))}
                      </Select>
                </FormControl>
                  </div>  
              </div>


          {filter.map((product) =>{
            const {id,image,price,title} = product
            return(
                <>
                  <div className="col-md-3 mb-4">
                          <Card className=' h-100 text-center p-4' key={id}>
                              <Card.Img variant="top" src={image} alt={title} height="250px"/>
                              <Card.Body>
                                  <Card.Title className='mb-0'>{title.substring(0,12)}...</Card.Title>
                                  <Card.Text className='lead fw-bold'>
                                      {formatCurrency(price)}
                                  </Card.Text>
                                  <NavLink   className='btn btn-outline-dark'  to={`/products/${product.id}`}>
                                      Buy Now
                                  </NavLink>
                              </Card.Body>
                          </Card>
                  </div>
                </>
            )
          })}
    </div>
  )
}

export default ShowProducts




