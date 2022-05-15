import './BookDetails.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon, LinkedinIcon } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const BookDetails = () => {
    return (
        [
            // Book Details Section Starts Here
            <section className="container">
                <div className="p-5 my-5 rounded-3 bg-white shadow div-custom-padding">
                    <div className="row">
                        <div className="col-md-3">
                            <div id='book-cover-div'>
                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-26-61c8474a9008f.jpg" height='320px' alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="px-3">
                            <h3 class="mb-2" style={{fontSize: '135%'}}>ইনসাইড 'র' | ভারতীয় গুপ্তচর সংস্থার অজানা অধ্যায় (হার্ড কাভার)</h3>
                            by <a class="font-weight-normal text-accent" href="#">অশোকা রায়না</a>, <a class="font-weight-normal text-accent" href="#">আবু রূশ্‌দ (অনুবাদক)</a>, <a class="font-weight-normal text-accent" href="#">আবু রূশ্‌দ (সম্পাদক)</a> <br />
                            <strong>Category:</strong> গোয়েন্দা ও গোপন সংস্থা, ডিটেকটিভ, ইন্টেলিজেন্স ও সিক্রেট এজেন্সি

                            <div class="details-book-info__content-rating">
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star-half"></i>
                                <span>13 Ratings</span>
                                <a href="#review"> / 7 Reviews</a>
                            </div>
                            <div class="mb-4 mt-4">
                                <strike>
                                ৳ 400
                                </strike>
                                <span class="h3 font-weight-normal text-accent mr-1">
                                ৳ 340
                                </span>
                                <small>You save ৳ 60 (15%)</small>
                            </div>
                            <div class="row no-gutters">
    <div class="col-2">
    <div class="mt-2">Quantity:</div>
    </div>
    <div class="col-10">
    <div class="product-quantity d-flex align-items-center">
    <div class="input-group input-group--style-2 pr-3" style={{width: '160px'}}>
    <span class="input-group-btn">
    <button class="btn btn-number" type="button" data-type="minus" data-field="quantity" disabled="disabled" style={{padding: '10px'}}>
    -
    </button>
    </span>
    <input type="text" name="quantity" class="form-control input-number text-center cart-qty-field" placeholder="1" value="1" min="1" max="50"/>
    <span class="input-group-btn">
    <button class="btn btn-number" type="button" data-type="plus" data-field="quantity" style={{padding: '10px'}}>
    +
    </button>
    </span>
    </div>
    </div>
    </div>
    </div>
    <div class="row d-flex no-gutters mt-2" id="chosen_price_div">
    <div class="mr-2">
    <div class="">Total Price:</div>
    </div>
    <div>
    <div class="product-price for-total-price">
    <strong id="chosen_price">৳340.00</strong>
    </div>
    </div>
    </div>
    <div class="d-flex
                            
                            mt-2">
    <button class="btn btn-primary element-center btn-gap-right" onclick="addToCart()" type="button">
    <i class="fa fa-cart-plus mr-2"></i>
    <span class="string-limit">Add to cart</span>
    </button>
    <button type="button" onclick="addWishlist('10')" class="btn btn-dark for-hover-bg">
    <i class="fa fa-heart-o mr-2" aria-hidden="true"></i>
    <span class="countWishlist-10">0</span>
    </button>
    </div>
    <FacebookShareButton url={'https://booksbd.net/book/inside-raw-the-story-of-indias-secret-service-hard-cover-90852'}>
        <FacebookIcon lightingColor='white' size={32} round={true}></FacebookIcon>
    </FacebookShareButton>
    <TwitterShareButton url={'https://booksbd.net/book/inside-raw-the-story-of-indias-secret-service-hard-cover-90852'}>
        <TwitterIcon lightingColor='white' size={32} round={true}></TwitterIcon>
    </TwitterShareButton>
    <WhatsappShareButton url={'https://booksbd.net/book/inside-raw-the-story-of-indias-secret-service-hard-cover-90852'}>
        <WhatsappIcon lightingColor='white' size={32} round={true}></WhatsappIcon>
    </WhatsappShareButton>
    <EmailShareButton url={'https://booksbd.net/book/inside-raw-the-story-of-indias-secret-service-hard-cover-90852'}>
        <EmailIcon lightingColor='white' size={32} round={true}></EmailIcon>
    </EmailShareButton>
    <LinkedinShareButton url={'https://booksbd.net/book/inside-raw-the-story-of-indias-secret-service-hard-cover-90852'}>
        <LinkedinIcon lightingColor='white' size={32} round={true}></LinkedinIcon>
    </LinkedinShareButton>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="p-0">
                                <h5 className='text-center'><b>দৃষ্টি আকর্ষণ</b></h5>
                                <ul className='list-group' style={{textAlign: 'justify'}}>
                                    <li class="list-group-item border-0">
                                        ১। আলোর উৎস কিংবা ডিভাইসের কারণে বইয়ের প্রকৃত রং কিংবা পরিধি ভিন্ন হতে পারে।
                                    </li>
                                    <li class="list-group-item border-0">
                                        ২। যে কোন সময়, প্রকাশক কর্তৃক বইয়ের কাভার পরিবর্তন হতে পারে। সে ক্ষেত্রে পরিবর্তিত কাভারের বই প্রদান করা হবে।
                                    </li>
                                    <li class="list-group-item border-0">
                                        ৩। ওয়েবসাইটে কাভারের ছবি আপলোড করার সুবিধার্থে আমরা একটি নিদির্ষ্ট সাইজ ব্যবহার করে থাকি। যেকারণে ওয়েবসাইটে দেওয়া কাভারের ছবির সাইজের সাথে প্রকৃত বইয়ের সাইজ ভিন্ন হতে পারে।
                                    </li>
                                    <li class="list-group-item border-0">
                                        ৪। বই অর্ডার করার পূর্বে, অনুগ্রহ পূর্বক আমাদের <Link to='/terms' className='text-danger'>টার্মস এন্ড কন্ডিশনসগুলো</Link> ভালো করে পড়ে নেওয়ার অনুরোধ রইলো।
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // Book Details Section Header Ends Here
            ,
            // Book Overview Section Starts Here
            <section className="container">
                <div className="p-5 my-5 rounded-3 bg-white shadow div-custom-padding">
                    <h3 className="fw-bold text-center mb-4">বইয়ের স্পেসিফিকেশন এবং সারাংশ</h3>
                    <div className="row">
                        <div className="col-md-5">
                        <table class="table table-hover table-bordered table-nowrap table-align-middle card-table">
                            <tbody>
                                <tr>
                                    <th>বই</th>
                                    <td>ইনসাইড 'র' | ভারতীয় গুপ্তচর সংস্থার অজানা অধ্যায়</td>
                                </tr>
                                <tr>
                                    <th>লেখক</th>
                                    <td>
                                        <a class="font-weight-normal text-accent" href="https://booksbd.net/books?id=200&amp;data_from=author&amp;page=1&amp;author_name=88572-ashoka-rayna">অশোকা রায়না</a>, <a class="font-weight-normal text-accent" href="https://booksbd.net/books?id=198&amp;data_from=author&amp;page=1&amp;author_name=47188-abu-rushd">আবু রূশ্‌দ (অনুবাদক)</a>, <a class="font-weight-normal text-accent" href="https://booksbd.net/books?id=198&amp;data_from=author&amp;page=1&amp;author_name=47188-abu-rushd">আবু রূশ্‌দ (সম্পাদক)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th>প্রকাশনী</th>
                                    <td>
                                        <a class="font-weight-normal text-accent" href="https://booksbd.net/books?id=18&amp;data_from=publisher&amp;page=1&amp;publisher_name=60910-bangladesh-defence-journal-publishing">বাংলাদেশ ডিফেন্স জার্নাল পাবলিশিং</a>
                                    </td>
                                </tr>
<tr>
<th>আইএসবিএন (ISBN)</th>
<td>978-984-90730-1-7</td>
</tr>
</tbody>
</table>
                        </div>
                        <div className="col-md-7">
                            <p>'Inside RAW: The Story of India’s Secret Service' ভারতীয় সাংবাদিক অশোকা রায়নার লেখা একটি সাড়া জাগানো বই। ভারতীয় গুপ্তচর সংস্থা নিয়ে এটিই প্রথম দালিলিক উপস্থাপন। এতে রয়েছে 'র'-এর সাংগঠনিক অবয়ব, এর কর্মপদ্ধতি, গোপন কলা কৌশল সম্পর্কে তথ্য উপাত্ত ও ঘটনার বিবরণ। তবে সবচেয়ে আকর্ষণীয় বিষয় হচ্ছে ১৯৭১ সালে বাংলাদেশের স্বাধীনতা যুদ্ধে 'র'-এর ভূমিকা, পার্বত্য চট্টগ্রামে শান্তিবাহিনীকে সহায়তা দান ও সিকিমের ভারতভুক্তকরণ নিয়ে চমকপ্রদ গোপন তথ্য। অশোকা রায়না তার দেশ-ভারতের স্বার্থকে সামনে রেখেই বইটি লিখেছেন। তবে বাংলাদেশের ইতিহাস সচেতন পাঠক ও গুপ্তচরবৃত্তি নিয়ে যাদের আগ্রহ আছে তাদের জন্য এই বইটি অবশ্য পাঠ্য। ইনসাইড 'র' : ভারতীয় গুপ্তচর সংস্থার অজানা অধ্যায় অশোকা রায়নার মূল বইটির অনুবাদ।</p>
                        </div>
                    </div>
                </div>
            </section>
            // Book Overview Section Ends Here
            ,
            // Related Books Section Starts Here
            <section className="container">
                <div className="py-5 my-5">
                    <h3 className="fw-bold text-center mb-4">অনুরূপ বিষয় অন্যান্য বই</h3>
                    <div className="row g-4">
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card shadow bg-white">
                            <div class="card-body bg-light">
                                        <div class="card-img-actions">
                                            
                                                <img src="https://booksbd.net/storage/app/public/product/thumbnail/2021-12-28-61cb12a64e9b7.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">ইতিহাসের ধুলোকালি</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">পিনাকী ভট্টাচার্য</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">180</h3>

                                        <div class="text-muted mb-3">
                                            <strike>190</strike>
                                        </div>

                                        <button type="button" class="btn primary-color text-white mb-4">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                            <i class="fa fa-cart-plus mr-2"></i> কার্টে যোগ করুন</button>

                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // Related Books Section Ends Here
        ]
    );
};

export default BookDetails;