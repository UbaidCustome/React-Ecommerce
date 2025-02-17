import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import Pimg1 from '../../assets/images/eight.jpg';
import Pimg2 from '../../assets/images/nine.jpg';
import Pimg3 from '../../assets/images/ten.jpg';
const Checkout = () => {
  return (
    <Layout>
        <div className='container checkout pb-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>                    
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <h3 className='border-bottom pb-3'><strong>Billing Details</strong></h3>
                    <form action='#'>
                        <div className='row pt-3'>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Name'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Email'/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <textarea className='form-control' rows={3} placeholder='Address'></textarea>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='City'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='State'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Zip'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Phone'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-5'>
                    <h3 className='border-bottom pb-3'><strong>Cart Items</strong></h3>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td width={100}>
                                    <img src={Pimg1} width={80} alt=""/>
                                </td>
                                <td width={600}>
                                    <h4>Product Name</h4>
                                    <div className='d-flex align-items-center pt-3'>
                                        <span>$50</span> 
                                        <div className='ps-3'>
                                            <button className='btn btn-size'>S</button>
                                        </div>
                                        <div className='ps-5'>X 1</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width={100}>
                                    <img src={Pimg2} width={80} alt=""/>
                                </td>
                                <td width={600}>
                                    <h4>Product Name</h4>
                                    <div className='d-flex align-items-center pt-3'>
                                        <span>$50</span> 
                                        <div className='ps-3'>
                                            <button className='btn btn-size'>S</button>
                                        </div>
                                        <div className='ps-5'>X 1</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width={100}>
                                    <img src={Pimg3} width={80} alt=""/>
                                </td>
                                <td width={600}>
                                    <h4>Product Name</h4>
                                    <div className='d-flex align-items-center pt-2'>
                                        <span>$50</span> 
                                        <div className='ps-3'>
                                            <button className='btn btn-size'>S</button>
                                        </div>
                                        <div className='ps-5'>X 1</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <div>Subtotal</div>
                                <div>$150</div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <div>Shipping</div>
                                <div>$10</div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <div>Grand Total</div>
                                <div>$160</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='border-bottom pt-4 pb-3'><strong>Payment Method</strong></h3>
                    <div className='pt-2'>
                        <input type="radio" id="cod" name="payment" value="COD"/>
                        <label htmlFor="credit" className='form-label ps-2'>COD</label>
                        <input type="radio" id="stripe" name="payment" className='ms-3' value="Stripe"/>
                        <label htmlFor="credit" className='form-label ps-2'>Stripe</label>
                    </div>
                    <div className='d-flex py-3'>
                        <Link to="/" className='btn btn-primary'>Paynow</Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Checkout