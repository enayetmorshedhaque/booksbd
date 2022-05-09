import './Authors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Authors = () => {
    return (
        [
            // Author Section Header Starts Here
            <section className="container">
                <div className="p-5 my-4 rounded-3 bg-white shadow div-custom-padding">
                    <h3 className="display-5 fw-bold text-center">লেখক</h3>
                    <hr/>
                    <div className="mx-auto text-start">
                        <p className="custom-paragraph">
                            লেখক! আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক বলা যায়। কিন্তু ‘লেখক’ শব্দটির যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন। কাল্পনিক চরিত্রগুলো তার লেখনী ও কলমের প্রাণখোঁচায় জীবন্ত হয়ে ওঠে। একজন লেখক তাঁর লেখার মাধ্যমে একটি প্রজন্মের চিন্তাধারা গড়ে দিতে পারেন। তাই লেখকদের কিংবদন্তী হবার পথ করে দিতে বুকস বিডি বদ্ধ পরিকর।
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
                            <input type="text" className="form-control" placeholder="আপনার প্রিয় লেখক অনুসন্ধান করুন"
                                aria-label="আপনার প্রিয় লেখক অনুসন্ধান করুন" aria-describedby="button-addon2"/>
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
                                    <img src="https://booksbd.net/public/images/author/65840-iftekhar-mahmud-1639852949.jpg"
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
                                    <img src="https://booksbd.net/public/images/author/72385-nibedita-aich-1639855480.jpg"
                                        className="card-img-top img-fluid rounded-circle custom-image-size"
                                        alt="Abosar Prokashana Sangstha"/>
                                    <h4 className="card-title category-title fw-bold mt-3 text-center">নিবেদিতা আইচ</h4>
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

export default Authors;