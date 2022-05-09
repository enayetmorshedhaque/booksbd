import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Publications = () => {
    return (
        [
            // Author Section Header Starts Here
            <section className="container">
                <div className="p-5 my-4 rounded-3 bg-white shadow div-custom-padding">
                    <h3 className="display-5 fw-bold text-center">প্রকাশনী</h3>
                    <hr/>
                    <div className="mx-auto text-start">
                        <p className="custom-paragraph">
                        সাহিত্যের আঁতুড়ঘর। সাহিত্যের সঠিক মূল্যায়ন করে পাঠকের কাছে উন্মুক্ত করে দেয়ার গুরুদায়িত্ব এই প্রকাশকদের। কেবল বই প্রকাশ নয়,ভালো মানের সাহিত্য বই আকারে নিয়মিত প্রকাশ করে প্রকাশকরা সাহিত্যের ধারা সচলভাবে অব্যাহত রাখেন। পাণ্ডুলিপি, ছাপা, মুদ্রণপ্রমাদ, সব বাঁধা-ত্যাগ-তিতিক্ষা পার করে যখন একটি বাঁধাই করা বই, এক টুকরো সাহিত্য ফসল পাঠকের সাহিত্য রসের ক্ষুধা পূরণ করে তখনই প্রকাশক সার্থক। প্রকাশকদের এই সাহিত্যধারার ট্রেনের সহযাত্রী হয়ে তাই রয়েছে দুর্বার শপ । দুর্বার শপ প্রকাশকদের সুযোগ করে দিচ্ছে আধুনিক সাহিত্যের রেনেসাঁর, যেখানে সাধারণ পাঠক আর প্রকাশকের মাঝে সেতুবন্ধন হিসেবে কাজ করবে দুর্বার শপ।
                        </p>
                    </div>
                </div>
            </section>
            // Author Section Header Ends Here
            ,
            // Search Author Section Starts Here
            <section className="container">
                {/* <div className="row">
                    <div className="col-lg-12">
                        <div className="p-2 my-2">
                            <h4 className="text-center">জনপ্রিয় লেখকগণ</h4>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="আপনার প্রিয় প্রকাশনী অনুসন্ধান করুন"
                                aria-label="আপনার প্রিয় প্রকাশনী অনুসন্ধান করুন" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </section>
            // Search Author Section Ends Here
            ,
            // Authors List Section Row Starts Here
            <section className="container">
                <div className="row py-2 my-2">
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/0364210037-anannya-1640383487.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/71900-anyadhara-1639909666.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/90210-abosar-prokashana-sangstha-1639909863.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/0364210037-anannya-1640383487.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/71900-anyadhara-1639909666.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/90210-abosar-prokashana-sangstha-1639909863.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/0364210037-anannya-1640383487.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/71900-anyadhara-1639909666.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card align-items-center rounded-3 shadow">
                            <a className="text-decoration-none text-dark" href="http://">
                                <div className="card-body category-body">
                                    <img src="https://booksbd.net/public/images/publisher/90210-abosar-prokashana-sangstha-1639909863.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">অবসর প্রকাশনা সংস্থা</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            // Publisher List Section Row Ends Here
        ]
    );
};

export default Publications;