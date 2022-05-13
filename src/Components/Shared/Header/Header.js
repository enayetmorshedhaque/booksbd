import './Header.css';
import {
    Link
} from "react-router-dom";
import React from 'react';
import logo from '../../../Resources/Images/Logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header className="p-0 m-0">
            <nav className="navbar navbar-expand-lg bg-white shadow">
                <div className="container-fluid" id='navbar-container'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <Link to='/' className="navbar-brand">
                                    <img src={logo} alt="BOOKS BD LOGO" width='150px' />
                                </Link>
                            </div>
                            <div className="col-md-8">
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control rounded-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-success rounded-0" type="button" id="button-addon2">
                                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="d-flex justify-content-around">
                                    <Link to='/wishlist' className='text-decoration-none text-black'>
                                        <FontAwesomeIcon icon={faHeart} className='fs-3'></FontAwesomeIcon>
                                    </Link>
                                    
                                    <Link to='/cart' className='text-decoration-none text-black'>
                                        <FontAwesomeIcon icon={faShoppingCart} className='fs-3'></FontAwesomeIcon>
                                    </Link>
                                    
                                    <Link to='/login' className='text-decoration-none text-black'>
                                        <FontAwesomeIcon icon={faUserCircle} className='fs-3'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid primary-color">
                <div className="container navbar-stuck-menu">
                    <div className='d-flex align-items-center'>
                        <nav>
                            <ul className="nav list-inline">
                                <li className="list-inline-item ps-0">
                                    <Link to='/' className='text-white'>হোম</Link> 
                                </li>
                                <li className="list-inline-item"> 
                                    <Link exact to='/authors' className='text-white'>লেখক</Link>
                                </li>
                                <li className="list-inline-item"> 
                                    <Link to='/publications' className='text-white'>প্রকাশনী</Link> 
                                </li>
                                <li className="list-inline-item"> 
                                    <Link to='/categories' className='text-white'>বিষয়</Link>
                                </li>
                                <li className="list-inline-item"> 
                                    <Link to='/book-fair' className='text-white'>বইমেলা</Link>
                                </li>
                                <li className="list-inline-item"> 
                                    <Link to='/pre-order' className='text-white'>প্রি অর্ডার</Link>
                                </li>
                                <li className="list-inline-item"> 
                                    <Link to='/institutional-orders' className='text-white'>প্রাতিষ্ঠানিক অর্ডার</Link>
                                </li>
                                <li className="list-inline-item"> 
                                    <Link to='/subjective-books' className='text-white'>বিষয়ভিত্তিক বই</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;