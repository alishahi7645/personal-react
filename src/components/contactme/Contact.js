import React from 'react'
import './contact.css';
import {FaInstagram , FaLinkedinIn , FaTwitter ,FaFacebookF} from 'react-icons/fa'
function Contact() {
    return (
        <div className='contact'>
            <div className="contact-image" style={{ backgroundImage: `url(images/contact-bg.jpg)`, backgroundRepeat: 'no-repeat', objectFit: 'cover', backgroundPosition: 'right', borderRadius: '5px' }}>
                <h1>راه های ارتباطی</h1>
            </div>
            <div className='contact-desc'>
                <div className='contact-inputs'>
                    <div className="input-field ">
                        <label for="name">نام</label>
                        <input type="text" name="name" id="" placeholder="نام شما" />
                    </div>
                    <div className="input-field">
                        <label for="email">ایمیل یا تلفن</label>
                        <input type="text" name="email" id="" placeholder="ایمیل یا تلفن شما" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <textarea placeholder="چیزی بنویسید" class="materialize-textarea"></textarea>
                    </div>
                </div>
                <div className="form-btn">
                    <button>ارسال</button>
                </div>
                <div className='map'>
                    <div className='map-desc'>
                        <div class="info">
                            <h6>ایمیل</h6>
                            <p>shahy8227@gmail.com</p>
                        </div>

                        <div class="info">
                            <h6>تلفن</h6>
                            <p>09017921774</p>
                        </div>

                        <div class="info">
                            <h6>آدرس</h6>
                            <p>ایران تبریز</p>
                        </div>
                    </div>
                </div>
                <div className='social'>
                    <div className='social-desc'>
                        <div className='social-info'><FaInstagram/></div>
                        <div className='social-info'><FaFacebookF/></div>
                        <div className='social-info'><FaTwitter/></div>
                        <div className='social-info'><FaLinkedinIn/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
