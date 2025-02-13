import React from 'react'
import Pimg1 from '../../assets/images/two.jpg';
import Pimg2 from '../../assets/images/three.jpg';
import Pimg3 from '../../assets/images/four.jpg';
import Pimg4 from '../../assets/images/five.jpg';
const FeaturedProducts = () => {
  return (
    <section className='section-2 py-5'>
        <div className='container'>
            <h2>Featured Products</h2>
            <div className='row py-4'>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg1} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Red Check Shirt For Men</a>
                            <div className='price'>
                                $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg2} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Black Shirt For Men</a>
                            <div className='price'>
                                $60 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6'>
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
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={Pimg4} alt="" className='w-100'/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href='#'>Red T-Shirt For Men</a>
                            <div className='price'>
                                $40 <span className='text-decoration-line-through'>$80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts