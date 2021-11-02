import React from 'react';
import './Footer.css';
import logo1 from '../../../images/food-delivery-logo.png';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
                <div className="row my-5 justify-content-center">
                    <div className="col text-center">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="mb-4">Stay With us!</h3>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-4 col">
                                        <button type="button" className="btn btn-outline-success my-4"><b>Get in Touch</b></button><br />
                                        <img src="https://i.imgur.com/pC6AgYC.jpg" class="img-fluid" width="450" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
                        <div className="col-12">
                            <div className="row row-2">
                                <div className="col-sm-3 text-md-center">
                                    <h3><img
                                        alt="Logo"
                                        src={logo1}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    /> <span>BD</span><span className="text-warning">GO</span></h3>
                                </div>
                                <div className="col-sm-3 my-sm-0 mt-5">
                                    <ul className="list-unstyled">
                                        <li className="mt-0">Platform</li>
                                        <li>Help Center</li>
                                        <li>Security</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 my-sm-0 mt-5">
                                    <ul className="list-unstyled">
                                        <li className="mt-0">Customers</li>
                                        <li>Use Cases</li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 my-sm-0 mt-5">
                                    <ul className="list-unstyled">
                                        <li className="mt-0">Company</li>
                                        <li>About</li>
                                        <li>Careers- <span className="Careers">We're-hiring</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
                        <div className="col-12">
                            <div className="row my-4 row-1 no-gutters">
                                <div className="col-sm-3 col-auto text-center"><span> NahidCh</span></div>
                                <div className="col-md-3 col-auto "></div>
                                <div className="col-md-3 col-auto"></div>
                                <div className="col my-auto text-md-left text-right ">
                                    <span> hello@Nahidch.com
                                        <span><img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid " width="25" /></span>
                                        <span><img src="https://i.imgur.com/N90KDYM.png" className="img-fluid " width="25" /></span>
                                    </span> </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;