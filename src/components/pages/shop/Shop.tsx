import { Card, } from 'react-bootstrap'
import  Products from './Products'
import './scss/shop.scss'




const Shop = () => {



  return (
    <div className='shop'>
            <Card  className='CArd'>
                <Card.Img  src="https://preview.colorlib.com/theme/essence/img/bg-img/breadcumb.jpg" className='IMG'/>
                  <Card.ImgOverlay>
                    <h2>Global Sale</h2>
                  </Card.ImgOverlay>
              </Card>
                      <Products   />
    </div>
  )
}

export default Shop