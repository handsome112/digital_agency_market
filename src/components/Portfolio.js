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
                            {this.props.items.map(image => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={image.id} >
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
                                    <h2>{image.title}</h2>
                                    <div>{image.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-5 footer'>
                            <label className = 'agency_btn mt-5'> <label><Link to="/" className="contact-link">Contact Us</Link></label> </label>
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