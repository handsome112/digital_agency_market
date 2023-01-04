import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import '../App.scss';



const Body = () => {

    return(
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">
                                    WHAT WE DO
                                </h2>
                                <p>
                                The world is digitally transforming and embracing new marketing technologies every day. With a cornucopia of marketing strategies to choose from, you need the most effective one for your brand. Eventually, it is going to drive higher conversion rates and revenues. Mighty Warners, a profound digital marketing company in Dubai, comes with the best marketing strategies to achieve this goal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Portfolio/>

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