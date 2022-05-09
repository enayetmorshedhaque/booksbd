import './WhyChooseUs.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSync, faCreditCard, faComments } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
    return (
        // Why Choose Us Section Starts Here
        <section className="container">
            <div className="my-4 div-custom-padding">
                <div className="why-choose-us info-item-container">
                    <div className="info-item">
                        <div className="info-thumb">
                            <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                        </div>
                        <div className="info-content">
                            <h3>ফ্রি ডেলিভারী</h3>
                            <small>৩০০০ টাকার উপরের অর্ডার এর জন্য</small>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-thumb">
                            <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
                        </div>
                        <div className="info-content">
                            <h3>রিফান্ড পলিসি</h3>
                            <small>বইয়ে কোন প্রকারের সমস্যা থাকলে</small>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-thumb">
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </div>
                        <div className="info-content">
                            <h3>নিরাপদ পেমেন্ট</h3>
                        <small>১০০% নিরাপদ পেমেন্ট</small>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-thumb">
                            <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                        </div>
                        <div className="info-content">
                            <h3>২৪/৭ সাপোর্ট</h3>
                            <small>সরাসরি সাপোর্ট</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // Why Choose Us Section Ends Here
    );
};

export default WhyChooseUs;