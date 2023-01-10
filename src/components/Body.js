import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageContentHover from 'react-image-hover';
import Portfolio from './Portfolio';
import Introduction from './Introduce';
import '../App.scss';



class Body extends Component {

    render() {
        return (
            <>
                <section className="about-us-area text-white">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="about-us-text-area mb-5 mt-5">
                                    <h2 className="about-us-text title-font-3">
                                        all about beauty.
                                    </h2>
                                    <p className='mt-5'>
                                        Beauty Power was established with the expertise of a team of marketing, sales and procurement professionals, specializing in the beauty industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Portfolio />

                <section className="beauty_power text-white">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="about-us-text-area mb-5 mt-5">
                                    <h2 className="about-us-text title-font-3">
                                        beauty power
                                    </h2>
                                    <p className='mt-5'>
                                        The aforementioned services are highly-customized to your business needs. Thus our team will consult and discuss with you the exact options and services needed by your business to achieve its goals.
                                        <br /><br />
                                        Likewise, we offer special packages for start-up salons and beauty entrepreneurs to support their initial launch and setup in the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="how_we_work text-white">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="about-us-text-area mb-5 mt-5">
                                    <h2 className="about-us-text title-font-3">
                                        How We Works
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Introduction />
                <div className='footer'>
                    <label className='agency_btn'> <label>KNOW MORE</label> </label>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        intros: state.intro
    }
}

export default Body;
// export default connect(mapStateToProps)(Body);