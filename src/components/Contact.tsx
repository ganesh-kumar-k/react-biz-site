import React from 'react';
import Footer from './Footer';

const Contact = () => (
    <main id="main">
        <section id="contact">
            <div className="container-fluid">

                <div className="section-header">
                    <h3>Contact Us</h3>
                </div>

                <div className="row wow fadeInUp">

                    <div className="col-lg-6">
                        <div className="map mb-4 mb-lg-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{ border: "0", width: "100%", height: "312px" }} allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-5 info">
                                <i className="ion-ios-location-outline"></i>
                                <p>A108 Adam Street, NY 535022</p>
                            </div>
                            <div className="col-md-4 info">
                                <i className="ion-ios-email-outline"></i>
                                <p>info@example.com</p>
                            </div>
                            <div className="col-md-3 info">
                                <i className="ion-ios-telephone-outline"></i>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                        <div className="form">
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form action="" method="post" role="form" className="contactForm">
                                <div className="form-row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validation"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                </div>
                                <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <Footer />
    </main>
);

export default Contact;