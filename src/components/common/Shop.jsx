import React from 'react'
import Layout from './Layout'
import Pimg1 from '../../assets/images/eight.jpg';
import Pimg2 from '../../assets/images/nine.jpg';
import Pimg3 from '../../assets/images/ten.jpg';
import Pimg4 from '../../assets/images/eleven.jpg';
const Shop = () => {
  return (
    <Layout>
      <div className='container'>
        <nav aria-label="breadcrumb" className='py-4'>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card shadow border-0 mb-3'>
              <div className='card-body p-4'>
                <h3 className='mb-3'>Categories</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor='' className='ps-2'>Men</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor='' className='ps-2'>Women</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor='' className='ps-2'>Kids</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='card shadow border-0 mb-3'>
              <div className='card-body p-4'>
                <h3 className='mb-3'>Brands</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor='' className='ps-2'>Nike</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor='' className='ps-2'>Levis</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor='' className='ps-2'>Puma</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row pb-5'>
                <div className='col-md-4 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg1} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Blue Check Shirt For Men</a>
                            <div className='price'>
                                $35 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg2} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Blue Check Shirt For Men</a>
                            <div className='price'>
                                $35 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg3} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Blue Check Shirt For Men</a>
                            <div className='price'>
                                $35 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg4} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Blue Check Shirt For Men</a>
                            <div className='price'>
                                $35 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg1} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Blue Check Shirt For Men</a>
                            <div className='price'>
                                $35 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg2} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Blue Check Shirt For Men</a>
                            <div className='price'>
                                $35 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Shop