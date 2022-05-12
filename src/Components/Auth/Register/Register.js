import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import registrationImage from '../../../Resources/Images/Auth/Register/register.jpg';

const Register = () => {
    return (
        // Registration Section Starts Here
        <section className="container">
            <div className="p-5 my-5 rounded-3 shadow div-custom-padding">
                <div className="row">
                    <div className="col-md-6 p-0 m-0">
                        <img src={registrationImage} alt="sign up" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h3 className="text-center"><span className="fw-bold ">বুকস বিডিতে</span> অ্যাকাউন্ট করুন
                                </h3>
                                <hr/>
                                <div className="mx-auto text-start">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">পুরো নাম</label>
                                            <input type="text" className="form-control rounded-0" id="exampleInputEmail1"
                                                required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">মোবাইল</label>
                                            <input type="text" className="form-control rounded-0" id="exampleInputEmail1"
                                                required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">ইমেইল ঠিকানা</label>
                                            <input type="email" className="form-control rounded-0" id="exampleInputEmail1"
                                                required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">পাসওয়ার্ড</label>
                                            <input type="password" className="form-control rounded-0" id="exampleInputPassword1"
                                                required/>
                                        </div>
                                        <div className="d-flex my-3 align-items-center">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">আমি বুকস বিডির <Link to='/terms-of-service' className="text-danger">পরিষেবার শর্তাবলী</Link>, <Link to='/privacy-policy' className="text-danger">গোপনীয়তা নীতি</Link>, এবং <Link to='/return-policy' className="text-danger">ফেরত নীতির</Link> সাথে সম্মতী পোষণ করছি</label>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary btn-lg rounded-0">
                                                <small>রেজিষ্টার</small>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <span className="d-block my-4 text-muted text-center">অথবা সোশ্যাল মিডিয়া দিয়ে অ্যাকাউন্ট
                                    করুন</span>
                                <hr/>
                                <div className="social-sign-up-section d-grid">
                                    <div className="d-flex justify-content-center gap-lg-3 gap-sm-3">
                                        <div  className="social-login google">
                                            <FontAwesomeIcon icon={faGoogle} className="fa-google"></FontAwesomeIcon>
                                        </div>
                                        
                                        <div  className="social-login facebook">
                                            <FontAwesomeIcon icon={faFacebookF} className="fa-facebook-f"></FontAwesomeIcon>
                                        </div>
                                        
                                        <div  className="social-login twitter">
                                            <FontAwesomeIcon icon={faTwitter} className="fa-twitter"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-3">আমাদের সাথে একাউন্ট আছে?         <Link to='/login' className="text-danger">সাইন ইন</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        // Registration Section Ends Here
    );
};

export default Register;