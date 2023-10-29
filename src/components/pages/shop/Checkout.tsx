import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import './scss/checkout.scss'
interface DataBase{
    firstName:string;
    lastName:string;
    email:string;
    company:string;
    country:string;
    address:string;
    postcode:number;
    city:string;
    province:string;
    phone:number;
  }

const Checkout = () => {
    const form = useForm<DataBase>({
        defaultValues:{
            firstName:"",
            lastName:"",
            email:"",
            company:"",
            country:"",
            address:"",
            postcode:0,
            city:"",
            province:"",
            phone:0
          
        },
        mode:'onTouched'
      })
      const{register,handleSubmit,formState,reset}=form;
      const {errors,isDirty,isValid} = formState;
  return (
    <div>
        <Container>
            <Row>
                <Col className='col-12 col-md-6'>
                    <div className='mt-30 clearfix'>
                        <div className='mb-30'>
                            <h5>Billing Address</h5>
                        </div>
                        <form action="" method='post'>
                            <Row>
                                <Col className='col-mb-6 mb-3 flex-grow-0'>
                                    <label htmlFor="firstName" style={{display:"inline-block"}}>FIRST NAME <span>*</span></label>
                                        <input type="text"  style={{display:"block"}} id='firstName' {...register("firstName" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your FirstName"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.firstName?.message}</p>
                                </Col>

                                <Col className='col-md-6 mb-3'>
                                    <label htmlFor="lastName" style={{display:"inline-block"}}>LAST NAME<span>*</span></label>
                                        <input type="text" id='lastName' style={{display:"block"}} {...register("lastName",{
                                            required:{
                                                value:true,
                                                message:"Please Enter your LastName"
                                            }
                                            })}/>
                                    <p style={{color:"red"}}>{errors.lastName?.message}</p>
                                </Col>
                                
                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="company" style={{display:"inline-block"}}>COMPANY <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='company' {...register("company" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your Company"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.company?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="country" style={{display:"inline-block"}}>COUNTRY <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='country' {...register("country" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your Country"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.country?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="address" style={{display:"inline-block"}}>ADDRESS <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='address' {...register("address" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your Address"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.address?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="postcode" style={{display:"inline-block"}}>POSTCODE <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='postcode' {...register("postcode" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your Postcode"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.postcode?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="city" style={{display:"inline-block"}}>CITY <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='firstName' {...register("city" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your City"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.city?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="province" style={{display:"inline-block"}}>PROVINCE <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='firstName' {...register("province" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your Province"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.province?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="phone" style={{display:"inline-block"}}>PHONE <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='firstName' {...register("phone" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your Phone"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.phone?.message}</p>
                                </Col>

                                <Col className='col-12 mb-3 '>
                                    <label htmlFor="email" style={{display:"inline-block"}}>Email <span>*</span></label>
                                        <input type="text"  style={{display:"block",width:"63%"}} id='firstName' {...register("email" ,{
                                            required:{
                                                value:true,
                                                message:"Please Enter your email"
                                            }
                                            })} />
                                    <p style={{color:"red"}}>{errors.email?.message}</p>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>

                <Col className='col-12 col-md-6 col-lg-5 ml-lg-auto'>
                    <div className='checkCard'>
                        <div className='chektitle'>
                            <h5>Your Order</h5>
                            <p>The Details</p>
                        </div>
                        <ul className='details-form mb-4'>
                            <li>
                                <span>Product</span>
                                <span>Total</span>
                            </li>
                            <li>
                                <span>Cocktail Yellow dress</span>
                                <span>$59.90</span>
                            </li>
                            <li>
                                <span>Subtotal</span>
                                <span>$59.90</span>
                            </li>
                            <li>
                                <span>Shipping</span>
                                <span>free</span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span>$59.90</span>
                                </li>
                        </ul>
                        <Tab
                    </div>
                </Col>


            </Row>
        </Container>
    </div>
  )
}

export default Checkout