import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import '../App.scss';



const Body = () => {

    return (
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">
                                    WHO WE ARE
                                </h2>
                                <p>
                                    Beauty Power was established with the expertise of a team of marketing, sales and procurement professionals,
                                     specializing in the beauty industry.
                                    Based in the UAE, we have curated our service offers to cater to the specialized requirements of the beauty 
                                    salons in the region, ensuring only the highest-quality customized services are provided to our esteemed 
                                    clients, thus supporting their business success goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Portfolio />

            <section className="lead">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="lead-title text-white mb-5 mt-4">
                                <h1 className="title-font">
                                    Let's work together
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                    Scaling-up your business
                                    is our mission!
                                </p>
                                <Link to="/contact">
                                    <button className="btn text-white">
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Body;