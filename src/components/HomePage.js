import React from 'react';
import Geometries from '../assets/js/three/geometries';

class HomePage extends React.Component {
    constructor() {
        super();
    }


    componentDidMount() {
        const g = new Geometries();
        g.init();
        g.animate();
    }

    render() {

        return (

            <div className="main">
                <div className="container tim-container">
                    <div id="extras">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h1 className="text-center">About thexap

                                <small className="subtitle">Get to know us</small></h1>
                                <hr />
                                <p>
                                    Thexap offers software development services. Specifically web sites, progressive web apps and hybrid mobile apps for iOS and Android.
                                </p>
                                <p>
                                    We use the latests technologies for our projects such as ReactJS, Angular2, Angular4, Ionic2, Ionic3 to deliver the best quality in the shortest time.
                                </p>
                                <p>
                                    We are committed to create beautiful easy-to-use applications based on your requirements. We are constantly innovating and learning new technologies to be able to advise and help you grow.
                                </p>
                                <p>
                                    Feel free to contacts us, we’ll be happy to help you!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div id="canvas" className="col-md-12 col-sm-12">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-30" />
            </div>


        );
    }
}

export default HomePage;
