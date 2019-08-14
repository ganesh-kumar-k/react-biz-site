import React from 'react';

const Services = () => (
    <main id="main">
        <section id="services" className="section-bg">
            <div className="container">

                <header className="section-header">
                    <h3>Services</h3>
                    <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                </header>

                <div className="row">
                    <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-analytics-outline" style={{ color: "#ff689b" }}></i></div>
                            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-bookmarks-outline" style={{ color: "#e9bf06" }}></i></div>
                            <h4 className="title"><a href="">Dolor Sitema</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-paper-outline" style={{ color: "#3fcdc7" }}></i></div>
                            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-speedometer-outline" style={{ color: "#41cf2e" }}></i></div>
                            <h4 className="title"><a href="">Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-world-outline" style={{ color: "#d6ff22" }}></i></div>
                            <h4 className="title"><a href="">Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-clock-outline" style={{ color: "#4680ff" }}></i></div>
                            <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <section id="why-us" className="wow fadeIn">
            <div className="container">
                <header className="section-header">
                    <h3>Why choose us?</h3>
                    <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                </header>

                <div className="row row-eq-height justify-content-center">

                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-diamond"></i>
                            <div className="card-body">
                                <h5 className="card-title">Corporis dolorem</h5>
                                <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                                <a href="#" className="readmore">Read more </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-language"></i>
                            <div className="card-body">
                                <h5 className="card-title">Voluptates dolores</h5>
                                <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                                <a href="#" className="readmore">Read more </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-object-group"></i>
                            <div className="card-body">
                                <h5 className="card-title">Eum ut aspernatur</h5>
                                <p className="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                                <a href="#" className="readmore">Read more </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row counters">

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">274</span>
                        <p>Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">421</span>
                        <p>Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">1,364</span>
                        <p>Hours Of Support</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">18</span>
                        <p>Hard Workers</p>
                    </div>

                </div>

            </div>
        </section>
    </main>
);

export default Services;