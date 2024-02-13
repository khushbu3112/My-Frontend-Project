import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';


function Contact() {

    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        sub:"",
        msg:""
    });

    const onchange=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    
    function validation(){

        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name Field is required !');
            result=false;
        }
        if(formvalue.email=="")
        {
            toast.error('Email Field is required !');
            result=false;
        }
        if(formvalue.sub=="")
        {
            toast.error('Sub Field is required !');
            result=false;
        }
        if(formvalue.msg=="")
        {
            toast.error('Message Field is required !');
            result=false;
        }
        return result;
    }

    const onsubmit=async(e)=>{
        // alert('hello');
        e.preventDefault();
        if(validation())
        {
            const res=await axios.post(`http://localhost:3000/contact`,formvalue);
            if(res.status==201)
            {
                toast.success('Inquiry Submitted Success !');
                setFormvalue({...formvalue,name:"",email:"",sub:"",msg:""});
            }
        }
    }

    return (
        <div>
            {/* ***** Main Banner Area Start ***** */}
            <div className="page-heading about-page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Contact Us</h2>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Main Banner Area End ***** */}
            {/* ***** Contact Area Starts ***** */}
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" width="100%" height="400px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                {/* You can simply copy and paste "Embed a map" code from Google Maps for any location. */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Say Hello. Don't Be Shy!</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                            <form id="contact" action=" " method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input name="name" type="text" id="name" value={formvalue.name} onChange={onchange} placeholder="Name" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input name="email" type="text" id="email" value={formvalue.email} onChange={onchange}  placeholder="Your email" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                        <input type="text" value={formvalue.sub} onChange={onchange} name="sub" placeholder="Subject" />
                                        </fieldset>
                                    </div>
                                      <div className="col-lg-12 mt-3">
                                        <fieldset>
                                        <input type="text" value={formvalue.msg} onChange={onchange} name="msg" placeholder="Your message" />
                                        </fieldset>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <fieldset>
                                            <textarea type="text" name="message"  value={formvalue.msg} onChange={onchange}  placeholder="Your message"/>
                                        </fieldset>
                                    </div> */}
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                            <button type="submit" id="form-submit"  className="main-dark-button" onClick={onsubmit}><i className="fa fa-paper-plane" /></button>
                                        </fieldset></div>

                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Contact Area Ends ***** */}
            {/* ***** Subscribe Area Starts ***** */}
            <div className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                            <form id="subscribe" action method="get">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your Name" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-2">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane" /></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                        <li>Phone:<br /><span>010-020-0340</span></li>
                                        <li>Office Location:<br /><span>North Miami Beach</span></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                        <li>Email:<br /><span>info@company.com</span></li>
                                        <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Subscribe Area Ends ***** */}
        </div>


    )
}

export default Contact