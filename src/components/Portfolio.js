import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageContentHover from 'react-image-hover';

class Portfolio extends Component {

    render() {
        return (
            <>
                <section className="portfolio">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="portfolio-title text-white mb-5 mt-4">
                                    <h1 className="title-font">
                                        Digital Marketing
                                    </h1>
                                    <div className="mt-4 mb-4">
                                        <p>We offer to consult, execute and deliver your website from ideation into publishing and management with the options of:</p>

                                        <p>- content creation (to include X stock images - EN/AR content copy - up to 3 photography/videography sessions)</p>
                                        <p>- new branding (to include a full rebranding with a new business logo and colours)</p>

                                        <p>We support the method through which you manage your business by seting up a business e-mail setup as well as social media accounts as per the prior consultation:g.</p>
                                    </div>
                                </div>
                                <div className="portfolio-title text-white mb-5 mt-4">
                                    <h1 className="title-font">
                                        Purchasing Management
                                    </h1>
                                    <div className="mt-4 mb-4">
                                    <p>Expert purchasing management is a necessity to ensure a smooth and timely delviery of all products needed to run a growing and successful salon business. Therefore we offer carefully-curated services managing the purchasing process from start to finish, on the daily basis. These services include:</p>

                                    <p> - seting up and managing your business emails</p>
                                    <p> - managing all liasions between the supplier and the business (including the list of items, purchase order and timely delivery as per the agreement)</p>
                                    <p>  - managing periodic stock management</p>
                                    <p>  - managing all accounting services related to the purchase order with all the suppliers</p>

                                    <p>  The aforementioned services are highly-customized to your business needs. Thus our team will consult and discuss with you the exact options and services needed by your business to achieve its goals.</p>

                                    <p>   Likewise, we offer special packages for start-up salons and beauty enterpreneurs to support their initial launch and setup in the market.</p>
                                    </div>
                                </div>
                            </div>
                            {this.props.items.map(image => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-4 col-md-6 col-sm-6" key={image.id} >
                                    <div className="portfolio-thumb">
                                        <Link to={`/works/${image.id}`}>
                                            <ImageContentHover
                                                className="center-block"
                                                image={image.src}
                                                content={{
                                                    title: [image.title]
                                                }}
                                                effect="fadeIn"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.works
    }
}


export default connect(mapStateToProps)(Portfolio);