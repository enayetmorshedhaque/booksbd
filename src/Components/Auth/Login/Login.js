import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import loginImage from '../../../Resources/Images/Auth/Login/login.jpg';

const Login = () => {
    return (
        // Login Section Starts Here
        <section  className="container">
            <div  className="p-5 my-5 bg-white rounded-3 shadow">
                <div  className="row">
                    <div  className="col-md-6 p-0 m-0">
                        <img src={loginImage} alt="login"  className="img-fluid"/>
                    </div>
                    <div  className="col-md-6">
                        <div  className="row justify-content-center">
                            <div  className="col-md-8">
                                <h3  className="text-center"><span  className="fw-bold ">বুকস বিডিতে</span> সাইনইন করুন
                                </h3>
                                <hr/>
                                <div  className="mx-auto text-start">
                                    <form>
                                        <div  className="mb-3">
                                            <label htmlFor="exampleInputEmail1"  className="form-label">ইমেইল ঠিকানা</label>
                                            <input type="email"  className="form-control rounded-0" id="exampleInputEmail1"
                                                required/>
                                        </div>
                                        <div  className="mb-3">
                                            <label htmlFor="exampleInputPassword1"  className="form-label">পাসওয়ার্ড</label>
                                            <input type="password"  className="form-control rounded-0" id="exampleInputPassword1"
                                                required/>
                                        </div>
                                        <div  className="d-flex mb-5 align-items-center">
                                            <div  className="form-check">
                                                <input type="checkbox"  className="form-check-input" id="exampleCheck1"/>
                                                <label  className="form-check-label" htmlFor="exampleCheck1">আমাকে মনে রাখুন</label>
                                            </div>
                                            <span  className="ms-auto">
                                                <Link to='/forgot-password' className="text-decoration-none text-danger">
                                                পাসওয়ার্ড ভুলে গেছেন?
                                                </Link>
                                            </span>
                                        </div>
                                        <div  className="d-grid">
                                            <button type="submit"  className="btn primary-color text-white btn-lg rounded-0">
                                                <small>সাইন ইন</small>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <span  className="d-block my-4 text-muted text-center">অথবা সোশ্যাল মিডিয়া দিয়ে সাইনইন
                                    করুন</span>
                                <hr/>
                                <div  className="social-sign-up-section d-grid">
                                    <div  className="d-flex justify-content-center gap-lg-3 gap-sm-3">
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

                                <div  className="text-center mt-3">আমাদের সাথে একাউন্ট নেই? &nbsp;
                                    <Link to='/register' className="text-danger">একাউন্ট করুন</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        //Login Section Ends Here
    );
};

export default Login;