import './Categories.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
    return (
        [
            // Category Section Header Starts Here
            <section className="container">
                <div className="p-5 my-5 rounded-3 bg-white shadow div-custom-padding">
                    <h3 className="display-5 fw-bold text-center">বিষয়</h3>
                    <hr/>
                    <div className="mx-auto text-start">
                        <p className="custom-paragraph">
                        লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই। রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই...
                        </p>
                    </div>
                </div>
            </section>
            // Category Section Header Ends Here
            ,
            // Search Category Section Starts Here
            <section className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="আপনার প্রিয় বিষয় অনুসন্ধান করুন"
                                aria-label="আপনার প্রিয় বিষয় অনুসন্ধান করুন" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </section>
            // Search Category Section Ends Here
            ,
            // Category  List Section Row Starts Here
            <section className="container">
                <div className="row py-2 my-2">
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অতিরিক্ত ছাড়</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">উপন্যাস</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অমর একুশে গ্রন্থমেলা</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অলিম্পিয়াড</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">আইন ও বিচার</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">ইউনিভার্সিটি</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">ইঞ্জিনিয়ারিং</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card category-card justify-content-center align-items-center rounded-3">
                            <Link to='/category-1' className="text-dark">
                                <div className="card-body category-body">
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">ইতিহাস ও ঐতিহ্য</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            // Category Section Row Ends Here
        ]
    );
};

export default Categories;