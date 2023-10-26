import  './scss/storeItems.scss'
import { Container, Row} from 'react-bootstrap';
import  LinearProgress  from '@mui/material/LinearProgress';
import { useState,useEffect } from 'react';
import ShowProducts from './ShowProducts';
// https://preview.colorlib.com/#essence
export interface CardItemType{
  qty: number;
  id:number;
  category:string
  description:string;
  image:string;
  price:number;
  title:string
  amount:number
 }



const Products  = () => {
  const [data, setData] = useState([] as CardItemType[])
  const [filter, setFilter] = useState(data)
  const [loading,setLoading] = useState(false)






  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products');
        setData(await response.clone().json());
        setFilter(await response.json())
        setLoading(false);
        console.log(filter);

    }
    getProducts();
  },[])






    const Loading = () => {
      return(
        <>
          <LinearProgress />
        </>
      )
    }
    

  return (
    <div className='storeItems'>
      <Container className='my-5 py-5'>
        <Row className='justify-content-center' >
          {loading ? <Loading /> : <ShowProducts filter={filter}  data={data} />}
        </Row>
      </Container>
    </div>
  )
}

export default Products 