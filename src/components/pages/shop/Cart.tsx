import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../../redux/action/action';
import { CardItemType } from './Products';
import { Container, Row } from 'react-bootstrap';
import { formatCurrency } from '../../../utilities/formatCurrency';

const Cart = () => {
    const state = useSelector((state:any)=> state.reduce)
    const dispatch = useDispatch()

    const handleAdd = (item: CardItemType) => {
        dispatch(addCart(item))
    }
    const handleDel = (item: CardItemType) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                        <NavLink to='/products' className='btn btn-outline-dark'>Back</NavLink>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product: CardItemType) => {
        const {image,title,qty,price} = product;
        return(
            <>
            <div className="px-4 my-5 bg-light rounded-3 py-5" >
                <Container className=" py-4" style={{backgroundColor:"#CDF5FD"}}>
                    <Row className=" justify-content-center">
                        <div className="col-md-4">
                            <img src={image} alt={title} height="200px" width="180px"  style={{overflow:"hidden"}}/>
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {qty} X {formatCurrency(price)} = {formatCurrency(qty *  price)}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus">-</i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleAdd(product)}>
                                <i className="fa fa-plus">+</i>
                            </button>
                        </div>
                    </Row>
                </Container>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;