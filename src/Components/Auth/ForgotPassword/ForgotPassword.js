import React from 'react';
import { Link } from 'react-router-dom';
import forgotPasswordImage from '../../../Resources/Images/Auth/ForgotPassword/forgot-password.jpg';

const ForgotPassword = () => {
    return (
        // Forgot Password Section Starts Here
        <section className="container">
            <div className="p-5 my-5 bg-white rounded-3 shadow">
                <div className="row">
                    <div className="col-md-6 p-0 m-0">
                        <img src={forgotPasswordImage} alt="login" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 d-grid align-items-center">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h3 className="text-center">পাসওয়ার্ড রিসেট করুন</h3>
                                <hr/>
                                <div className="mx-auto text-start">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">ইমেইল ঠিকানা</label>
                                            <input type="email" className="form-control rounded-0" id="exampleInputEmail1"
                                                required/>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn primary-color text-white btn-lg rounded-0">
                                                <small>পাসওয়ার্ড রিসেট লিংক পাঠান</small>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        //Forgot Password Section Ends Here
    );
};

export default ForgotPassword;