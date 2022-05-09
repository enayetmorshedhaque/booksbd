import './Footer.css';
import { faInstagram, faWhatsapp, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../Resources/Images/Logo/logo.png';
import paymentGateway from '../../../Resources/Images/PaymentGateWay/surjopay-footer.png';
const Footer = () => {
    return (
        // Footer Section Starts Here
        <footer className="container-fluid bg-white p-0 m-0">
            <div className="container pt-5 pb-3">
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <img src={logo} alt="" className="img-fluid p-0" width="230px"/>
                        <address className="mt-3 fw-normal">
                            ৩৭৪/১, আহমেদ নগর, মিরপুর-১, ঢাকা-১২১৬, বাংলাদেশ
                        </address>
                        <div className="text-start">
                            <a href="mailto:query@booksbd.net"
                                className="text-decoration-none text-dark">query@booksbd.net</a><br/>
                            <a href="tel:+8801713138707" className="text-decoration-none text-dark">+880-171-313-870-7</a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5 className="fw-bold mb-2">আমার একাউন্ট</h5>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <a href="login.html" className="text-decoration-none text-dark">লগইন</a>
                            </li>
                            <li className="mb-1">
                                <a href="registration.html" className="text-decoration-none text-dark">রেজিস্টার</a>
                            </li>
                            <li className="mb-1">
                                <a href="my-account.html" className="text-decoration-none text-dark">আমার একাউন্ট</a>
                            </li>
                            <li className="mb-1">
                                <a href="my-orders.html" className="text-decoration-none text-dark">অর্ডারের ইতিহাস</a>
                            </li>
                            <li className="mb-1">
                                <a href="my-wishlist.html" className="text-decoration-none text-dark">আমার পছন্দ তালিকা</a>
                            </li>
                            <li>
                                <a href="order-track.html" className="text-decoration-none text-dark">অর্ডার ট্র্যাকিং</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5 className="fw-bold mb-2">নীতিমালা</h5>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <a href="return-policy.html" className="text-decoration-none text-dark">রিটার্ন নীতিমালা</a>
                            </li>
                            <li className="mb-1">
                                <a href="refund-policy.html" className="text-decoration-none text-dark">ফেরত নীতিমালা</a>
                            </li>
                            <li className="mb-1">
                                <a href="my-account.html" className="text-decoration-none text-dark">সাপোর্ট নীতিমালা</a>
                            </li>
                            <li className="mb-1">
                                <a href="terms-of-service.html" className="text-decoration-none text-dark">পরিষেবার
                                    শর্তাবলী</a>
                            </li>
                            <li className="mb-1">
                                <a href="privacy-policy.html" className="text-decoration-none text-dark">গোপনীয়তা নীতিমালা</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5 className="fw-bold mb-2">তথ্য</h5>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <a href="about-us.html" className="text-decoration-none text-dark">আমাদের সম্পর্কে</a>
                            </li>
                            <li className="mb-1">
                                <a href="contact-us.html" className="text-decoration-none text-dark">যোগাযোগ করুন</a>
                            </li>
                            <li className="mb-1">
                                <a href="faq.html" className="text-decoration-none text-dark">প্রায়শই জিজ্ঞাসিত
                                    প্রশ্নাবলী</a>
                            </li>
                        </ul>
                        <h5 className="fw-bold mb-2">সামাজিক যোগাযোগ</h5>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item facebook">
                                <a href="https://facebook.com/booksbdthebookshop" className="text-decoration-none text-dark"
                                    data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook">
                                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                </a>
                            </li>
                            <li className="list-group-item instagram">
                                <a href="https://www.instagram.com/booksbdshop/" className="text-decoration-none text-dark"
                                    data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </a>
                            </li>
                            <li className="list-group-item whatsapp">
                                <a href="https://wa.me/8801713138707" className="text-decoration-none text-dark"
                                    data-bs-toggle="tooltip" data-bs-placement="top" title="Whatsapp">
                                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                                </a>
                            </li>
                            <li className="list-group-item youtube">
                                <a href="https://www.youtube.com/channel/UCOP0FmcXLQJgNjSDK5AaKUA"
                                    className="text-decoration-none text-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                                    title="Youtube">
                                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-4">
                    <img src={paymentGateway} alt="" className="img-fluid"/>
                </div>
                <hr/>
                <div className="container">
                    <div className="text-center">
                        ©২০২১ <span className="fw-bold"> বুকস বিডি</span>। সমস্ত অধিকার সংরক্ষিত
                    </div>
                </div>
            </div>
        </footer>
        // Footer Section Ends Here
    );
};

export default Footer;