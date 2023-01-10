import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageContentHover from 'react-image-hover';

class Introduction extends Component {
    render() {
        return (
            <>
                {/* <section className="how_we_work">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            {this.props.intros.map(intro => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-3 col-md-6 col-sm-6 mb-5" key={intro.id} >
                                    <div className="portfolio-thumb">
                                        <Link to={`/works/${intro.id}`}>
                                            <ImageContentHover
                                                className="center-block"
                                                image={intro.src}
                                                content={{
                                                    title: [intro.title]
                                                }}
                                                effect="fadeIn"
                                            />
                                        </Link>

                                    </div>
                                    <h2>{intro.title}</h2>
                                    <div>{intro.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
                <section className="introduction">
                    <div className="container-fluid text-center">
                        <div className="row align-items-center">
                            <div className=" col-lg-3 col-md-6 col-sm-6 mb-5" key={0} >
                                <div className='introduction_left_string'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                </div>
                            </div>
                            {this.props.intros.map(intro => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-3 col-md-6 col-sm-6 mb-5" key={intro.id} >
                                    <div className="introduction-thumb">
                                        <Link to={`/works/${intro.id}`}>
                                            <ImageContentHover
                                                className="center-block"
                                                image={intro.src}
                                                content={{
                                                    title: [intro.title]
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
        )
    }
}

const mapStateToProps = state => {
    return {
        intros: state.intro
    }
}

export default connect(mapStateToProps)(Introduction);