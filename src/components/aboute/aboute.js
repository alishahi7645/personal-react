import React from 'react'
import './aboute.css';
import { FaDownload } from 'react-icons/fa'
function Aboute() {
    return (
        <div className='aboute'>
            <div className="aboute-text">
                <div className='image-aboute'>
                    <div className="aboute-image" style={{ backgroundImage: `url(images/home.jpg)`, backgroundRepeat: 'no-repeat', objectFit: 'cover', backgroundPosition: 'center', borderRadius: '15px' }}>

                    </div>
                </div>
                <div className='pool-aboute'>
                    <div className='aboute-pool'>
                        <h1>درباره من</h1>
                        <h3>
                            علی شاهی هستم هنرجو رشته شبکه و نرم افزار ( کامپیوتر ) متولد 1382 ساکن تبریز هستم، در حوضه برنامه نویسی فعالیت می کنم و از سال 1399 فعالیت خود را در این عرصه آغاز کرده ام و تاکنون چندین وبسایت استاتیک و داینامیک را طراحی کرده ام تخصص های بنده در Html 5 ، Bootstrap ،  ، ReactJs ، css3 ، Java Script ، SASS و ... می باشد
                        </h3>
                        <div className='skill'>
                            <ul className="skill-item">
                                <li>
                                    <span>Html</span>
                                </li>
                                <li>
                                    <span>Css</span>
                                </li>
                                <li>
                                    <span>Bootstrap</span>
                                </li>
                                <li>
                                    <span>Javascript</span>
                                </li>
                                <li>
                                    <span>ReactJs</span>
                                </li>
                            </ul>
                        </div>
                        <button className='button'>دانلود رزومه <FaDownload /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboute
