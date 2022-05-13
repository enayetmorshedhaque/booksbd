import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const InstitutionalOrders = () => {
    return (
        [
            // Institutional Order Section Header Starts Here
            <section className="container">
                <div className="p-5 my-5 rounded-3 bg-white shadow">
                    <h3 className="display-5 fw-bold text-center">বুকস বিডি থেকে প্রাতিষ্ঠানিক ক্লায়েন্টরা পাচ্ছেন কাস্টমাইজড সার্ভিস</h3>
                    <hr/>
                    <div className="mx-auto text-start">
                        <p className="custom-paragraph">
                        টেন্ডার, RFQ অথবা ডিরেক্ট পারচেজ যেভাবেই কেনা হোক, যত কপি-ই অর্ডার করা হোক না কেন বাংলাদেশের যেকোন স্থানে বই পৌছে দিচ্ছে বুকস বিডি। স্কুল, কলেজ, বিশ্ববিদ্যালয়, লাইব্রেরি, কর্পোরেট হাউজ, ব্যাংক, বীমা, NGO, ডিফেন্স এবং সরকারি-বেসরকারি সব ধরনের প্রতিষ্ঠানে সর্বোচ্চ ডিস্কাউন্টে দেশি-বিদেশি অরিজিনাল প্রিন্টেড বই সরবরাহ করছে বুকস বিডি কর্পোরেট সেলস টীম।
                        </p>
                    </div>
                    <div className="card-footer border-0 mt-3 p-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> (+880) 1713 138 707 (9.00AM - 7.00PM)
                            </p>
                            <p>
                                <button className='btn btn-lg btn-outline-success text white'>
                                    Request a quote
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            // Institutional Order Section Header Ends Here
        ]
    );
};

export default InstitutionalOrders;