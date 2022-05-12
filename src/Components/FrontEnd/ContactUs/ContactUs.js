import './ContactUs.css';
import React from 'react';

const ContactUs = () => {
    return (
        [
            // Contact Us Section Starts Here
        <section className="container">
            <div className="pb-3 my-5 rounded-0 div-custom-padding">
                <h4 className="card-title mb-4 text-center">আমাদের সাথে যোগাযোগের মাধ্যম</h4>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card custom-contact-card shadow  border-0 rounded-0">
                            <div className="card-body text-center">
                                <h5 className="card-title my-3">সরাসরি যোগাযোগ করুন</h5>
                                <p className="mb-0">
                                    <a href="mailto:booksbdshop@gmail.com" className="text-muted">booksbdshop@gmail.com</a>
                                </p>
                                <p>
                                    <a href="tel:+8801713138707" className="text-muted">(+880) 171-3138-707</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card custom-contact-card shadow  border-0 rounded-0">
                            <div className="card-body text-center">
                                <h5 className="card-title my-3">প্রধান অফিস</h5>
                                <p className="text-muted mb-0">
                                ৫৫/১/এ, শাহ সাহেব লেন, নারিন্দা,<br/>ঢাকা-১১০০, বাংলাদেশ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card custom-contact-card shadow  border-0 rounded-0">
                            <div className="card-body text-center">
                                <h5 className="card-title my-3">সাধারণ তথ্য সম্পর্কিত</h5>
                                <p className="mb-0">
                                    <a href="mailto:info@booksbd.net" className="text-muted">info@booksbd.net</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card custom-contact-card shadow border-0 rounded-0">
                            <div className="card-body text-center">
                                <h5 className="card-title my-3">বই সম্পর্কিত প্রশ্ন</h5>
                                <p className="mb-0">
                                    <a href="mailto:query@booksbd.net" className="text-muted">query@booksbd.net</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card custom-contact-card shadow border-0 rounded-0">
                            <div className="card-body text-center">
                                <h5 className="card-title my-3">বই ফেরত সম্পর্কিত</h5>
                                <p className="mb-0">
                                    <a href="mailto:return@booksbd.net" className="text-muted">return@booksbd.net</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card custom-contact-card shadow border-0 rounded-0">
                            <div className="card-body text-center">
                                <h5 className="card-title my-3">ক্যারিয়ার</h5>
                                <p className="mb-0">
                                    <a href="mailto:career@booksbd.net" className="text-muted">career@booksbd.net</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // Contact Us Section Ends Here
        ,
        // Get in Touch Section Starts Here
        <section className="container-fluid">
            <div className="container">
                <div className="pt-4 pb-3 my-4 rounded-0 div-custom-padding">
                    <h4 className="card-title mb-4 text-center">আমাদের সাথে যোগাযোগ করুন</h4>
                    <form action="">
                        <div className="row mb-3">
                            <div className="col-md-5">
                                <div className="mb-3">
                                    <label htmlFor="contactUsName" className="form-label">আপনার নাম</label>
                                    <input type="text" className="form-control" id="contactUsName" required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="contactUsEmail" className="form-label">আপনার ইমেইল</label>
                                    <input type="email" className="form-control" id="contactUsEmail" required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="contactUsEmailSubject" className="form-label">ইমেইল বিষয়</label>
                                    <input type="text" className="form-control" id="contactUsEmailSubject" required/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label htmlFor="contactUsEmailBodyLabel" className="form-label">আপনার ইমেল সম্পর্কে বিস্তারিত
                                        লিখুন</label>
                                    <textarea name="contactUsEmailBody" id="contactUsEmailBody" className="form-control"
                                        rows="6" required></textarea>
                                </div>
                                <div className="float-lg-end d-grid">
                                    <button type="submit" className="btn primary-color text-white rounded-0">
                                        <small>আপনার বার্তাটি পাঠান</small>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        // Get in Touch Section Ends Here
        ]
    );
};

export default ContactUs;