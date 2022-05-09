import React from 'react';

const Subscribe = () => {
    return (
        // Subscribe to Our Newsletter Section Starts Here
        <section className="container-fluid">
            <div className="container">
                <div className="pt-4 pb-3 px-4 my-4 rounded-0 bg-white shadow div-custom-padding">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>বুকস বিডির আকর্ষণীয় সব অফার পেতে আজই সাবস্ক্রাইব করুন</h5>
                        </div>
                        <div className="col-12 text-center d-flex mt-4">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="আপনার ইমেইলটি লিখুন"
                                        aria-describedby="button-addon2"/>
                                    <button className="btn primary-color text-white" type="button" id="button-addon2">
                                    সাবস্ক্রাইব
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // Subscribe to Our Newsletter Section Ends Here
    );
};

export default Subscribe;