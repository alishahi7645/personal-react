import React from 'react'
import './home.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
function Home() {
    return (
        <div className='home'>
            <div className='profile'>
                <div className='auth-div'>
                    <div className='auth-div-section'>
                        <p>برنامه نویس</p>
                        <h1>علی شاهی</h1>
                        <h2>طراح و توسعه دهنده وب</h2>

                        <div className='social-section'>
                        <FaEnvelope /> <h5 className='email'>shahy8227@gmail.com</h5> 
                       
                        </div>
                        
                        <div className='social-section'>
                        <FaPhone /> <h5 className='email'>09017921774</h5> 
                       
                        </div>
                        
                        <div className='social-section'>
                        <FaMapMarkerAlt/> <h5 className='email'>ایران تبریز</h5> 
                       
                        </div>
                    </div>

                </div>
                <div className='image-div' style={{ backgroundImage: `url(images/profile.png) ` }}>

                </div>

            </div>
        </div>
    )
}

export default Home
