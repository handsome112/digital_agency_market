import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact section-title mt-5">
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-md-7 mx-auto">
                            <div className="contact-title mb-5 mt-5">
                                <h1 className="title-font title-font-size">
                                    Contact Us
                                </h1>
                                <div className="mt-4 mb-4">
                                    <p>Do not hestitate to contact us to discuss what services are right for you!</p>

                                    <p>Prefer to chat over a phone call or would rather send a text on our business Whatsapp? Let us know how you would like us to contact you back!</p>

                                    <p>Drop us a message on Whatsapp XXXX or an email on: XXXXXXX with your contact name or company, and our team will reach out to you within 24 hours!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto text-white">
                            <div className="contact-form mb-5 mt-5">
                                <form>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <textarea className="form-control" placeholder="Message" rows="4" />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn mt-5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;